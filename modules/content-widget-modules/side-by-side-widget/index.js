const areaConfig = require('../../../lib/area');
const aosSchema = require('../../../lib/aosSchema.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Side by side',
    icon: 'layout-side-icon',
    description: 'Display two sections of content side by side',
    previewImage: 'jpg'
  },
  icons: {
    'layout-side-icon': 'PageLayoutSidebarRight'
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
          widgets: areaConfig.all
        }
      },
      two: {
        type: 'area',
        contextual: true,
        options: {
          widgets: areaConfig.all
        }
      },
      ...aosSchema
    }
  }
};
