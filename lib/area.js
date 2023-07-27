const tiptapStyles = {
  all: [
    {
      tag: 'p',
      label: 'Paragraph (P)'
    },
    {
      tag: 'h1',
      label: 'Heading 1 (H1)'
    },
    {
      tag: 'h2',
      label: 'Heading 2 (H2)'
    },
    {
      tag: 'h3',
      label: 'Heading 3 (H3)'
    },
    {
      tag: 'h4',
      label: 'Heading 4 (H4)'
    },
    {
      tag: 'span',
      label: 'Small',
      class: 'small'
    },
    {
      tag: 'span',
      label: 'Lead',
      class: 'lead'
    },
    {
      tag: 'span',
      label: 'Highlight: Primary',
      class: 'highlight-primary'
    },
    {
      tag: 'span',
      label: 'Highlight: Secondary',
      class: 'highlight-secondary'
    },
    {
      tag: 'span',
      label: 'Highlight: Tertiary',
      class: 'highlight-tertiary'
    },
    {
      tag: 'span',
      label: 'Highlight: Black',
      class: 'highlight-black'
    },
    {
      tag: 'span',
      label: 'Highlight: White',
      class: 'highlight-white'
    },
  ],
  simple: {}
};

const tiptapTools = {
  all: [
    'styles',
    '|',
    'bold',
    'italic',
    'strike',
    // 'superscript',
    // 'subscript',
    '|',
    'link',
    'anchor',
    'horizontalRule',
    '|',
    'bulletList',
    'orderedList',
    // 'blockquote',
    '|',
    'alignLeft',
    'alignCenter',
    'alignRight',
    'alignJustify',
    // '|',
    // 'table',
    // '|',
    // 'image',
    // 'codeBlock',
    // '|',
    // 'undo',
    // 'redo'
  ],
  simple: [
    'styles',
    '|',
    'bold',
    'italic',
    '|',
    'link',
    '|',
    'bulletList',
    'orderedList'
  ]
};

const apostropheWidgets = {
  '@apostrophecms/image': {
    className: 'img-fluid'
  },
  '@apostrophecms/video': {},
  '@apostrophecms/rich-text': {
    toolbar: tiptapTools.all,
    styles: tiptapStyles.all
  }
};



const area = {
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
    '@apostrophecms/rich-text': {
      toolbar: tiptapTools.all,
      styles: tiptapStyles.all
    }
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

module.exports = area;
