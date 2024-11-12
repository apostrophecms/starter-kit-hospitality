import buttonSchema from '../../../lib/buttonSchema.js';

export default {
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
