const tiptapStyles = {
  all: [
    {
      tag: 'p',
      label: 'Paragraph (P)'
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
      tag: 'p',
      label: 'Small (P)',
      class: 'small'
    },
    {
      tag: 'p',
      label: 'Lead (P)',
      class: 'lead'
    }
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
    'superscript',
    'subscript',
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
    '|',
    // 'image',
    // 'codeBlock',
    // '|',
    'undo',
    'redo'
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
    'orderedList',
    '|',
    'undo',
    'redo'
  ]
};

const area = {
  all: {
    '@apostrophecms/image': {
      className: 'img-fluid'
    },
    '@apostrophecms/video': {},
    '@apostrophecms/rich-text': {
      toolbar: tiptapTools.all,
      styles: tiptapStyles.all
    }
  },
  richText: {
    '@apostrophecms/rich-text': {
      toolbar: tiptapTools.all,
      styles: tiptapStyles.all
    }
  }
};

module.exports = area;
