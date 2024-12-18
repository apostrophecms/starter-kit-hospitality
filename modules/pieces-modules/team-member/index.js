export default {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Team Member',
    openGraph: false,
    seoFields: false
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Name',
        required: true
      },
      profileImage: {
        label: 'Profile image',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      workTitle: {
        type: 'string',
        label: 'Work title'
      }
    },
    group: {
      basics: {
        fields: [ 'title', 'profileImage', 'workTitle' ]
      }
    }
  }
};
