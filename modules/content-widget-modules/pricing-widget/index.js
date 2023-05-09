const areaConfig = require('../../../lib/area');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Pricing',
    icon: 'cards-icon'
  },
  icons: {
    'cards-icon': 'Cards'
  },
  fields: {
    add: {
      intro: {
        type: 'area',
        label: 'intro',
        options: {
          widgets: areaConfig.richText
        }
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
                widgets: areaConfig.richText
              }
            },
            features: {
              type: 'array',
              label: 'Features list',
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