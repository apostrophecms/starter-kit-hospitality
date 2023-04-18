const areaConfig = require('../../lib/area');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Columns',
    icon: 'pillar'
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
            label: 'Narrow width (60% of the max width, centered)',
            value: 'narrow'
          }
        ]
      },
      cols: {
        type: 'select',
        label: 'Column configuration',
        required: true,
        choices: [
          {
            label: 'Single column, 50%',
            value: 'single-50',
            def: true
          },
          {
            label: '50% / 50%',
            value: '50-50'
          },
          {
            label: '33% / 33% / 33%',
            value: '33-33-33'
          },
          {
            label: '25% / 25% / 25% / 25%',
            value: '25-25-25-25'
          }
        ]
      },
      one: {
        type: 'area',
        contextual: true,
        options: {
          widgets: areaConfig
        }
      },
      two: {
        type: 'area',
        contextual: true,
        options: {
          widgets: areaConfig
        },
        if: {
          $or: [
            { cols: '25-25-25-25' },
            { cols: '33-33-33' },
            { cols: '50-50' }
          ]
        }
      },
      three: {
        type: 'area',
        contextual: true,
        if: {
          $or: [
            { cols: '25-25-25-25' },
            { cols: '33-33-33' }
          ]
        },
        options: {
          widgets: areaConfig
        }
      },
      four: {
        type: 'area',
        contextual: true,
        if: {
          cols: '25-25-25-25'
        },
        options: {
          widgets: areaConfig
        }
      }
    }
  },
  icons: {
    pillar: 'Pillar'
  }
};
