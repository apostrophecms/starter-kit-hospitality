module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Pricing Widget',
    icon: 'user-icon'
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Title'
      },
      cards: {
        type: 'array',
        label: 'Cards',
        titleField: 'label',
        max: 4,
        fields: {
          add: {
            label: {
              type: 'string',
              label: 'Label'
            },
            content: {
              type: 'area',
              label: 'Content',
              options: {
                widgets: {
                  '@apostrophecms/rich-text': {}
                }
              }
            },
            features: {
              type: 'array',
              label: 'Features List',
              titleField: 'title',
              fields: {
                add: {
                  title: {
                    type: 'string',
                    label: 'Title'
                  }
                }
              }
            },
            buttons: {
              type: 'area',
              label: 'Buttons',
              options: {
                max: 2,
                widgets: {
                  button: {}
                }
              }
            }
          }
        }
      }
    }
  }
};
