module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Contact Form'
  },
  fields: {
    add: {
      contactForm: {
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/form': {}
          }
        }
      },
      _image: {
        type: 'relationship',
        withType: '@apostrophecms/image',
        label: 'Image',
        max: 1,
        help: 'Setting this image display the form in a two column layout'
      }
    }
  }
};
