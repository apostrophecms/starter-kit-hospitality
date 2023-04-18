module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Team Widget',
    icon: 'user-icon'
  },
  fields: {
    add: {
      style: {
        type: 'select',
        label: 'Layout style',
        choices: [
          {
            label: 'Three Column',
            value: 'three-col'
          },
          {
            label: 'Four Column',
            value: 'four-col'
          }
        ]
      },
      _teamMembers: {
        type: 'relationship',
        withType: 'team-member',
        label: 'Select team member(s)...',
        required: true,
        builders: {
          project: {
            name: 1,
            _profileImage: 1,
            workTitle: 1
          }
        }
      }
    }
  }
};