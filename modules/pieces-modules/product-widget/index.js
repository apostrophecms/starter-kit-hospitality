const areaConfig = require('../../../lib/area');
const aosSchema = require('../../../lib/aosSchema.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Product Menu',
    icon: 'list-icon'
  },
  icons: {
    'list-icon': 'FormatListChecks'
  },
  fields: {
    add: {
      headingIntro: {
        type: 'area',
        label: 'Heading intro',
        options: {
          widgets: areaConfig.richText
        }
      },
      style: {
        type: 'select',
        label: 'Layout style',
        required: true,
        choices: [
          {
            label: 'Full',
            value: 'full',
            def: true
          },
          {
            label: 'Split',
            value: 'split'
          }
        ]
      },
      currencySybmol: {
        type: 'string',
        label: 'Currency symbol',
        max: 1
      },
      _menuItems: {
        label: 'Menu',
        type: 'relationship',
        withType: 'product',
        builders: {
          project: {
            type: 'product',
            title: 1,
            description: 1,
            price: 1
          }
        }
      },
      ...aosSchema
    }
  }
};
