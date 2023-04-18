const linkSchema = require('../../lib/linkSchema');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Pricing Widget',
    icon: 'user-icon'
  },
  fields: {
    add: {
      cards: {
        type: 'array',
        label: 'Cards',
        titleField: 'title',
        max: 4,
        fields: {
          add: {
            title: {
              type: 'string',
              label: 'Title'
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
              type: 'array',
              max: 2,
              fields: {
                add: linkSchema
              }
            }
          }
        }
      }
    }
  }
};
