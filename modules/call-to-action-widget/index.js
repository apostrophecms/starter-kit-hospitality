const linkSchema = require('../../lib/linkSchema');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Call to action',
    icon: 'cog-icon'
  },
  fields: {
    add: {
      style: {
        type: 'select',
        label: 'Layout style',
        required: true,
        choices: [
          {
            label: 'Basic',
            value: 'basic',
            def: true
          },
          {
            label: 'Large Marquee',
            value: 'marquee'
          }
        ]
      },
      featureImage: {
        type: 'area',
        label: 'Feature Image',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      content: {
        type: 'area',
        label: 'Content',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      buttons: {
        type: 'array',
        label: 'Buttons',
        max: 2,
        fields: {
          add: linkSchema
        }
      }
    }
  },
  icons: {
    pillar: 'Pillar'
  }
};
