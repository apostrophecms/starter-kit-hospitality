import areaConfig from '../../../lib/area.js';
import aosSchema from '../../../lib/aosSchema.js';

export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Call to action',
    icon: 'gesture-tap-button-icon',
    placeholderUrl: '/modules/@apostrophecms/image-widget/placeholder.jpg',
    description: 'Add a large hero image with a call to action to your page',
    previewImage: 'jpg'
  },
  init(self) {
    self.determineBestAssetUrl('placeholder');
  },
  icons: {
    'gesture-tap-button-icon': 'GestureTapButton'
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
            value: 'large-marquee'
          }
        ]
      },
      contentAlignment: {
        type: 'select',
        label: 'Content alignment',
        required: true,
        choices: [
          {
            label: 'Left',
            value: 'left',
            def: true
          },
          {
            label: 'Centered',
            value: 'centered'
          },
          {
            label: 'Right',
            value: 'right'
          }
        ]
      },
      featureImage: {
        type: 'area',
        label: 'Feature image',
        required: true,
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
        required: true,
        options: {
          widgets: {
            ...areaConfig.richText,
            'button-strip': {}
          }
        }
      },
      ...aosSchema
    }
  }
};
