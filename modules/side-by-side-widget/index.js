const areaConfig = require('../../lib/area');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Side by side',
    icon: 'pillar'
  },
  fields: {
    add: {
      invert: {
        type: 'boolean',
        label: 'Invert columns',
        required: true,
        def: false
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
        }
      }
    }
  },
  icons: {
    pillar: 'Pillar'
  }
};
