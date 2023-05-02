module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Custom Form'
  },
  fields: {
    add: {
      layout: {
        type: 'select',
        choices: [
          {
            label: 'Background',
            value: 'background'
          },
          {
            label: 'Two Column',
            value: 'column'
          }
        ]
      },
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
        ],
        if: {
          layout: 'background'
        }
      },
      _backgroundImage: {
        type: 'relationship',
        withType: '@apostrophecms/image',
        label: 'Select a background image',
        max: 1,
        if: {
          $or: [
            { backgroundStyle: 'image' },
            { layout: 'column' }
          ]

        }
      },
      backgroundColor: {
        type: 'color',
        label: 'Pick a background color',
        if: {
          backgroundStyle: 'color'
        }
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
      form: {
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