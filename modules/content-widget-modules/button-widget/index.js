const buttonSchema = require('../../../lib/buttonSchema');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Button',
    icon: 'button-icon'
  },
  icons: {
    'button-icon': 'ShapeRectanglePlus'
  },
  fields: {
    add: {
      ...buttonSchema.button
    }
  }
};
