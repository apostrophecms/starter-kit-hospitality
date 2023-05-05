module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Subscription Form',
    icon: 'form-icon'
  },
  icons: {
    'form-icon': 'FormDropdown'
  },
  fields: {
    add: {
      layout: {
        type: 'select',
        choices: [
          {
            label: 'Background',
            value: 'background'
          },
          {
            label: 'Two column',
            value: 'column'
          }
        ]
      },
      backgroundStyle: {
        type: 'select',
        label: 'Background style',
        required: true,
        def: 'image',
        choices: [
          {
            label: 'Image',
            value: 'image'
          },
          {
            label: 'Color',
            value: 'color'
          }
        ],
        if: {
          layout: 'background'
        }
      },
      _backgroundImage: {
        type: 'relationship',
        withType: '@apostrophecms/image',
        label: 'Select an image',
        max: 1,
        if: {
          $or: [
            { backgroundStyle: 'image' },
            { layout: 'column' }
          ]

        }
      },
      backgroundColor: {
        type: 'color',
        label: 'Pick a background color',
        if: {
          backgroundStyle: 'color'
        }
      },
      content: {
        type: 'area',
        label: 'Content',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      form: {
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/form': {}
          }
        }
      },
      subscription: {
        type: 'boolean',
        label: 'Set as a subscription form',
        def: false
      },
      emailSubscriptionField: {
        label: 'Which is your subscription email field?',
        help: 'aposForm:confEmailFieldHelp',
        type: 'string',
        required: true,
        if: {
          subscription: true
        }
      }
    },
    group: {
      subscription: {
        label: 'Enable Subscriptions',
        fields: ['subscription', 'emailSubscriptionField']
      }
    }
  },
  handlers(self) {
    return {
      submission: {
        async subscription(req, form, data) {
          if (form.subscription === false) {
            return;
          }
          // Test email field has valid email
          // Email validation (Regex reference: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (
            data[form.emailSubscriptionField] &&
            (typeof data[form.emailSubscriptionField] !== 'string' ||
              !re.test(data[form.emailSubscriptionField]))
          ) {
            await self.apos.notify(req, 'aposForm:errorEmailConfirm', {
              type: 'warning',
              icon: 'alert-circle-icon',
              interpolate: {
                field: form.emailSubscriptionField
              }
            });
            return null;
          }

          // Include subscription set up below
          try {
            self.apos.util.log('⚠️ You need to set up a custom subscription service here');
            return null;
          } catch (err) {
            self.apos.util.error('⚠️ @apostrophecms/form submission email subscription error: ', err);

            return null;
          }
        }
      }
    };
  }
}