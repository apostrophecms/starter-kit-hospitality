// The link schema will always be added into an array within a widget, piece or page schema like so:
/*
buttons: {
  type: 'array',
  max: 2,
  fields: {
    add: linkSchema
  }
}

Even if you require only one link, just adjust the max property to 1.
*/

module.exports = {
  linkLabel: {
    label: 'Link label',
    type: 'string',
    required: true
  },
  linkType: {
    label: 'Link type',
    type: 'select',
    choices: [
      {
        label: 'Page',
        value: 'page'
      },
      {
        label: 'File',
        value: 'file'
      },
      {
        label: 'Custom',
        value: 'custom'
      }
    ]
  },
  _page: {
    label: 'Link page',
    type: 'relationship',
    withType: '@apostrophecms/page',
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1
      }
    },
    if: {
      linkType: 'page'
    }
  },
  _file: {
    label: 'Link file',
    type: 'relationship',
    withType: '@apostrophecms/file',
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1
      }
    },
    if: {
      linkType: 'file'
    }
  },
  linkUrl: {
    label: 'Custom URL',
    type: 'url',
    required: true,
    if: {
      linkType: 'custom'
    }
  },
  target: {
    label: 'Will the link open a new browser tab?',
    type: 'checkboxes',
    choices: [
      {
        label: 'Open in new tab',
        value: '_blank'
      }
    ]
  }
};
