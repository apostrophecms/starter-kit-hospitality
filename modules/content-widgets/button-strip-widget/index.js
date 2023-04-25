const buttonSchema = require('../../../lib/buttonSchema');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Buttons',
    icon: 'cursor-default-click-icon'
  },
  fields: {
    add: {
      buttons: {
        type: 'array',
        label: 'Button strip',
        fields: {
          add: {
            ...buttonSchema.button
          }
        }
      }
    }
  }
};
