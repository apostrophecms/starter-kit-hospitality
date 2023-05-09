module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      image: {
        type: 'area',
        label: 'Image',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      }
    }
  }
};
