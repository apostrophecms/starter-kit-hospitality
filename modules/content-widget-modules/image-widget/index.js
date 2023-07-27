const aosSchema = require('../../../lib/aosSchema.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    icon: 'image-icon'
  },
  fields: {
    add: {
      _image: {
        type: 'relationship',
        withType: '@apostrophecms/image',
        label: 'Image',
        required: true,
        max: 1
      },
      ...aosSchema
    }
  }
};
