module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Image Gallery',
    icon: 'image-gallery-icon'
  },
  icons: {
    'image-gallery-icon': 'ImageAlbum'
  },
  fields: {
    add: {
      displayType: {
        type: 'select',
        label: 'Slide display type',
        required: true,
        choices: [
          {
            label: 'Large, single slide',
            value: 1,
            def: true
          },
          {
            label: 'Three slides',
            value: 3
          },
          {
            label: 'Four slides',
            value: 4
          }
        ]
      },
      _images: {
        type: 'relationship',
        withType: '@apostrophecms/image',
        label: 'Images',
        required: true,
        max: 10
      }
    }
  }
};
