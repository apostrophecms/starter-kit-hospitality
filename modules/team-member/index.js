module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Team Member'
  },
  fields: {
    add: {
      name: {
        type: 'string',
        label: 'Name',
        required: true
      },
      profileImage: {
        label: 'Profile Image',
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
        label: 'Work Title'
      }
    },
    group: {}
  }
};