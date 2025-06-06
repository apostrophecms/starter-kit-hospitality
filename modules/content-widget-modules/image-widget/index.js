import aosSchema from '../../../lib/aosSchema.js';

export default {
  extend: '@apostrophecms/image-widget',
  options: {
    icon: 'image-icon',
    label: 'Image',
    description: 'Display an image on your page',
    previewImage: 'jpg',
    className: 'img-fluid'
  },
  fields: {
    add: {
      ...aosSchema
    }
  }
};
