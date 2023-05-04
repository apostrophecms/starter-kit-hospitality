const areaConfig = require('../../../lib/area');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Accordion',
    icon: 'menu-open-icon'
  },
  icons: {
    'menu-open-icon': 'MenuOpen'
  },
  fields: {
    add: {
      accordions: {
        type: 'array',
        label: 'Accordions',
        titleField: 'title',
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
                widgets: areaConfig
              }
            }
          }
        }
      }
    }
  }
};
