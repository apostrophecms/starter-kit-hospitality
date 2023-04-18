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
      _profileImage: {
        type: 'relationship',
        withType: '@apostrophecms/image',
        label: 'Profile Image',
        required: true,
        max: 1
      },
      workTitle: {
        type: 'string',
        label: 'Work Title'
      }
    },
    group: {}
  }
};