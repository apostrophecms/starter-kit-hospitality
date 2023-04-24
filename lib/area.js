module.exports = {
  '@apostrophecms/image': {},
  '@apostrophecms/video': {},
  '@apostrophecms/rich-text': {
    toolbar: [
      'styles',
      '|',
      'bold',
      'italic',
      'strike',
      'link',
      '|',
      'bulletList',
      'orderedList',
      '|',
      'blockquote',
      'codeBlock',
      '|',
      'horizontalRule',
      '|',
      'undo',
      'redo'
    ],
    styles: [
      {
        tag: '',
        label: 'Headline'
      },
      {
        tag: '',
        label: 'Subheadline'
      },
      {
        tag: '',
        label: 'Body'
      },
      ,
      {
        tag: '',
        label: 'Big Body'
      },
      ,
      {
        tag: '',
        label: 'Caption'
      }
    ]
  }
};
