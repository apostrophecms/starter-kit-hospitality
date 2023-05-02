const buttonSchema = require('../../../lib/buttonSchema');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Button',
    icon: 'cursor-default-click-icon'
  },
  fields: {
    add: {
      ...buttonSchema.button
    }
  }
};
