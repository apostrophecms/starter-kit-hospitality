module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Menu Item'
    // Additionally add a `pluralLabel` option if needed.
    // pluralLabel: 'Menu Items'
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Title'
      },
      description: {
        type: 'string',
        label: 'Description'
      },
      price: {
        type: 'float',
        label: 'Item Price',
        min: 0.01,
        def: 0.00,
        required: true
      }
    },
    group: {}
  }
};