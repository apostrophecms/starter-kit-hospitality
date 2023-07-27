const areaConfig = require('../../../lib/area');
const aosSchema = require('../../../lib/aosSchema.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Rich Text',
    description: 'Add styled text to your page',
    icon: 'format-text-icon',
    previewImage: 'png',
    defaultData: { content: '<p>wassuppe</p>' }
  },
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
