module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Menu',
    icon: 'list-icon'
  },
  icons: {
    'list-icon': 'FormatListChecks'
  },
  fields: {
    add: {
      heading: {
        type: 'string',
        label: 'Menu heading'
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
        label: 'Currency Symbol',
        max: 1
      },
      _menuItems: {
        label: 'Menu',
        type: 'relationship',
        withType: 'menu-item',
        builders: {
          project: {
            type: 'menu-item',
            title: 1,
            description: 1,
            price: 1
          }
        }
      }
    }
  }
};
