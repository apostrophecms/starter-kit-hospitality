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
            // Hospitality + Marketing widgets
            columns: {},
            'call-to-action': {},
            'image-gallery': {},
            'menu-item': {},
            'side-by-side': {},
            'contact-form': {},
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},

            // Marketing widgets
            accordion: {},
            pricing: {},
            'sign-up-form': {},
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
