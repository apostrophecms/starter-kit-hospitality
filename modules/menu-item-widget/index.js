module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Menu',
    icon: 'pillar'
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
            title: 1,
            description: 1,
            price: 1
          }
        }
      }
    }
  },
  icons: {
    pillar: 'Pillar'
  }
};
