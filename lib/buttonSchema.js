import linkSchema from './linkSchema.js';

const button = {
  ...linkSchema,
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
};

export default { button };
