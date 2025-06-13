const apostropheWidgets = {
  '@apostrophecms/image': {
    className: 'img-fluid'
  },
  '@apostrophecms/video': {},
  '@apostrophecms/rich-text': {}
};

export default {
  all: {
    columns: {},
    'call-to-action': {},
    'custom-form': {},
    'image-gallery': {},
    product: {},
    'side-by-side': {},
    'rich-text': {},
    image: {},
    map: {},

    // Marketing widgets
    accordion: {},
    pricing: {},
    'team-member': {}
  },
  columnExpandedGroup: {
    basic: {
      label: 'Basic Tools',
      widgets: {
        image: {},
        'rich-text': {}
      },
      columns: 2
    },
    layout: {
      label: 'Layout Tools',
      widgets: {
        accordion: {},
        'call-to-action': {},
        'side-by-side': {}
      },
      columns: 2
    },
    general: {
      label: 'Themed Widgets',
      widgets: {
        'custom-form': {},
        'image-gallery': {},
        map: {},
        pricing: {},
        product: {},
        'team-member': {}
      },
      columns: 3
    }
  },
  apos: {
    ...apostropheWidgets
  },
  richText: {
    '@apostrophecms/rich-text': {}
  },
  fullExpandedGroup: {
    layout: {
      label: 'Layout Tools',
      widgets: {
        columns: {},
        'side-by-side': {}
      },
      columns: 2
    },
    media: {
      label: 'Media Widgets',
      widgets: {
        image: {},
        '@apostrophecms/video': {},
        'image-gallery': {}
      },
      columns: 2
    },
    general: {
      label: 'Content Widgets',
      widgets: {
        'rich-text': {},
        accordion: {},
        'call-to-action': {},
        'custom-form': {},
        map: {},
        pricing: {},
        product: {},
        'team-member': {}
      },
      columns: 3
    }
  }
};
