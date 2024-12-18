import areaConfig from '../../../lib/area.js';
import aosSchema from '../../../lib/aosSchema.js';

export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Columns',
    icon: 'pillar',
    description: 'Create flexible layouts for your content.',
    previewImage: 'svg'
  },
  icons: {
    'view-column-icon': 'ViewColumn'
  },
  fields: {
    add: {
      style: {
        type: 'select',
        label: 'Layout style',
        required: true,
        choices: [
          {
            label: 'Full width',
            value: 'full',
            def: true
          },
          {
            label: 'Contained width',
            value: 'contained'
          }
        ]
      },
      cols: {
        type: 'select',
        label: 'Column configuration',
        required: true,
        choices: [
          {
            label: 'Single column',
            value: 'single',
            def: true
          },
          {
            label: '50% / 50%',
            value: 'double'
          },
          {
            label: '33% / 33% / 33%',
            value: 'triple'
          },
          {
            label: '25% / 25% / 25% / 25%',
            value: 'quadruple'
          }
        ]
      },
      one: {
        type: 'area',
        contextual: true,
        options: {
          expanded: true,
          groups: {
            ...areaConfig.columnExpandedGroup
          }
        }
      },
      two: {
        type: 'area',
        contextual: true,
        options: {
          expanded: true,
          groups: {
            ...areaConfig.columnExpandedGroup
          }
        },
        if: {
          $or: [
            { cols: 'double' },
            { cols: 'triple' },
            { cols: 'quadruple' }
          ]
        }
      },
      three: {
        type: 'area',
        contextual: true,
        if: {
          $or: [
            { cols: 'quadruple' },
            { cols: 'triple' }
          ]
        },
        options: {
          expanded: true,
          groups: {
            ...areaConfig.columnExpandedGroup
          }
        }
      },
      four: {
        type: 'area',
        contextual: true,
        if: {
          cols: 'quadruple'
        },
        options: {
          expanded: true,
          groups: {
            ...areaConfig.columnExpandedGroup
          }
        }
      },
      ...aosSchema
    }
  }
};
