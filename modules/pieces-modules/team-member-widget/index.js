const aosSchema = require('../../../lib/aosSchema.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Team Members',
    icon: 'teams-icon',
    description: 'Display team members on your page',
    previewImage: 'svg'
  },
  icons: {
    'teams-icon': 'AccountMultiplePlus'
  },
  fields: {
    add: {
      style: {
        type: 'select',
        label: 'Layout style',
        required: true,
        choices: [
          {
            label: 'Three column',
            value: 'three-col'
          },
          {
            label: 'Four column',
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
            type: 'team-member',
            title: 1,
            profileImage: 1,
            workTitle: 1
          }
        }
      },
      ...aosSchema
    }
  }
};
