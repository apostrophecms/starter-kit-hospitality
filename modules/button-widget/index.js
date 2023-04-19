const linkSchema = require('../../lib/linkSchema');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Button',
    icon: 'cursor-default-click-icon'
  },
  fields: {
    add: {
      ...linkSchema.link,
      color: {
        type: 'color',
        label: 'Hover Color'
      },
      block: {
        type: 'boolean',
        label: 'Full Width',
        def: false
      },
      alignment: {
        type: 'select',
        label: 'Button Alignment',
        choices: [
          {
            label: 'Left',
            value: 'left',
            def: true
          },
          {
            label: 'Center',
            value: 'center'
          },
          {
            label: 'Right',
            value: 'right'
          }
        ]
      }
    }
  }
};
