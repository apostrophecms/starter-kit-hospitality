export default {
  extend: '@apostrophecms/layout-widget',
  options: {
    label: 'Side by side',
    icon: 'layout-side-icon',
    description: 'Display two sections of content side by side',
    previewImage: 'jpg',
    columns: 2,
    minSpan: 1,
    defaultSpan: 1,
    gap: '1rem'
  },
  icons: {
    'layout-side-icon': 'PageLayoutSidebarRight'
  },
  fields: {
    add: {
      columns: {
        type: 'area',
        options: {
          widgets: {
            'side-by-side-content': {}
          }
        }
      }
    }
  }
};
