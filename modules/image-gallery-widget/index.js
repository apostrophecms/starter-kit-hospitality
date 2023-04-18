module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Image Gallery',
    icon: 'image-icon'
  },
  fields: {
    add: {
      style: {
        type: 'select',
        label: 'Layout style',
        required: true,
        choices: [
          {
            label: 'Large',
            value: 'large',
            def: true
          },
          {
            label: 'Three Columns',
            value: 'three-col'
          },
          {
            label: 'Four Columns',
            value: 'four-col'
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
  },
  icons: {
    pillar: 'Pillar'
  }
};
