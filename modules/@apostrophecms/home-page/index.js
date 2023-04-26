module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: {
            // Forms
            // Hospitality + Marketing widgets
            columns: {},
            'call-to-action': {},
            'custom-form': {},
            'image-gallery': {},
            'menu-item': {},
            'side-by-side': {},
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},

            // Marketing widgets
            accordion: {},
            pricing: {},
            'team-member': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  }
};
