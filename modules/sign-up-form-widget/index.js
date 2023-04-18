module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Sign Up Form'
  },
  fields: {
    add: {
      backgroundStyle: {
        type: 'select',
        label: 'Background Style',
        required: true,
        def: 'image',
        choices: [
          {
            label: 'Image',
            value: 'image'
          },
          {
            label: 'Color',
            value: 'color'
          }
        ]
      },
      _backgroundImage: {
        type: 'relationship',
        withType: '@apostrophecms/image',
        label: 'Select a background image',
        max: 1
      },
      colorPicker: {
        type: 'string',
        label: 'Pick a background color'
      },
      content: {
        type: 'area',
        label: 'Content',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      signUpForm: {
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/form': {}
          }
        }
      }
    }
  }
};
