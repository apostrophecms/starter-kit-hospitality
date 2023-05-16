const areaConfig = require('../../../lib/area');

module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      richText: {
        type: 'area',
        label: 'Rich Text',
        options: {
          widgets: {
            ...areaConfig.richText
          }
        }
      }
    }
  }
};
