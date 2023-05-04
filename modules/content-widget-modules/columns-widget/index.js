const areaConfig = require('../../../lib/area');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Columns',
    icon: 'view-column-icon'
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
          widgets: areaConfig.all
        }
      },
      two: {
        type: 'area',
        contextual: true,
        options: {
          widgets: areaConfig.all
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
          widgets: areaConfig.all
        }
      },
      four: {
        type: 'area',
        contextual: true,
        if: {
          cols: 'quadruple'
        },
        options: {
          widgets: areaConfig.all
        }
      }
    }
  }
};
