const areaConfig = require('../../../lib/area');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Accordion Widget',
    icon: 'user-icon'
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
