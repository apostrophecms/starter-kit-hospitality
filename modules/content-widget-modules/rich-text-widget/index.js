module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      richText: {
        type: 'area',
        label: 'Rich Text',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      }
    }
  }
};
