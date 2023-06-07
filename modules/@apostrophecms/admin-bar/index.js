module.exports = {
  options: {
    groups: [
      {
        name: 'pages',
        label: 'Pages',
        items: [
          '@apostrophecms/page'
        ]
      },
      {
        name: 'forms',
        label: 'Forms',
        items: [
          '@apostrophecms/form'
        ]
      },
      {
        name: 'products',
        label: 'Products',
        items: [
          'product'
        ]
      },
      {
        name: 'teams',
        label: 'Teams',
        items: [
          'team-member'
        ]
      },
      {
        name: 'media',
        label: 'Media',
        items: [
          '@apostrophecms/image',
          '@apostrophecms/file',
          '@apostrophecms/image-tag',
          '@apostrophecms/file-tag'
        ]
      },
      {
        name: 'admin',
        label: 'Admin',
        items: [
          '@apostrophecms/user'
        ]
      }
    ]
  }
}