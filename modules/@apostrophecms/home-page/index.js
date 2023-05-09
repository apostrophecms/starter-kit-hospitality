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
            'rich-text': {},
            image: {},
            map: {},

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
