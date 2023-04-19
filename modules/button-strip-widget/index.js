const linkSchema = require('../../lib/linkSchema');

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
            ...linkSchema.link,
            style: {
              type: 'select',
              label: 'Color Style',
              required: true,
              choices: [
                {
                  label: 'Primary',
                  value: 'primary'
                },
                {
                  label: 'Secondary',
                  value: 'secondary'
                }
              ]
            },
            size: {
              type: 'select',
              label: 'Size',
              required: true,
              choices: [
                {
                  label: 'Regular',
                  value: ''
                },
                {
                  label: 'Small',
                  value: 'sm'
                },
                {
                  label: 'Large',
                  value: 'lg'
                }
              ]
            }
            // block: {
            //   type: 'boolean',
            //   label: 'Full Width',
            //   def: false
            // },
            // alignment: {
            //   type: 'select',
            //   label: 'Button Alignment',
            //   choices: [
            //     {
            //       label: 'Left',
            //       value: 'left',
            //       def: true
            //     },
            //     {
            //       label: 'Center',
            //       value: 'center'
            //     },
            //     {
            //       label: 'Right',
            //       value: 'right'
            //     }
            //   ]
            // }
          }
        }
      }
    }
  }
};
