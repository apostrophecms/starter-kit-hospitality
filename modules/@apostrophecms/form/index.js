import areaConfig from '../../../lib/area.js';

export default {
  options: {
    classPrefix: 'my-form',
    formWidgets: {
      '@apostrophecms/form-text-field': {},
      '@apostrophecms/form-textarea-field': {},
      '@apostrophecms/form-boolean-field': {},
      '@apostrophecms/form-select-field': {},
      '@apostrophecms/form-radio-field': {},
      '@apostrophecms/form-checkboxes-field': {},
      '@apostrophecms/form-conditional': {},
      ...areaConfig.richText
    }
  },
  fields: {
    add: {
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
        fields: [ 'subscription', 'emailSubscriptionField' ]
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
};
