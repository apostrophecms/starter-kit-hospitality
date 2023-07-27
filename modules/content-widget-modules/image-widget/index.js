const aosSchema = require('../../../lib/aosSchema.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    icon: 'image-icon',
    label: 'Image',
    description: 'Display an image on your page',
    previewImage: 'jpg',
    className: 'img-fluid'
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
