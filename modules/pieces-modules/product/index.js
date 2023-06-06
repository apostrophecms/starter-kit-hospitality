module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Product',
    openGraph: false,
    seoFields: false
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
        label: 'Item price',
        min: 0.01,
        def: 0.00,
        required: true
      }
    },
    group: {
      basics: {
        fields: ['title', 'description', 'price']
      }
    }
  }
};
