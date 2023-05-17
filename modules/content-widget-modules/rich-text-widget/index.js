const areaConfig = require('../../../lib/area');
const aosSchema = require('../../../lib/aosSchema.js');

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
      },
      ...aosSchema
    }
  }
};
