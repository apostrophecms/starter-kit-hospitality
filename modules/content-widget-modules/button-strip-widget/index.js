import buttonSchema from '../../../lib/buttonSchema.js';
import aosSchema from '../../../lib/aosSchema.js';

export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Buttons',
    icon: 'button-icon'
  },
  icons: {
    'button-icon': 'ShapeRectanglePlus'
  },
  fields: {
    add: {
      buttons: {
        type: 'array',
        label: 'Button strip',
        titleField: 'linkText',
        fields: {
          add: {
            ...buttonSchema.button
          }
        }
      },
      ...aosSchema
    }
  }
};
