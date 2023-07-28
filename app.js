require('dotenv').config();

require('apostrophe')({
  shortName: 'starter-kit-hospitality',
  baseUrl: process.env.APOS_BASE_URL || 'http://localhost:3000',
  nestedModuleSubdirs: true,
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget img-fluid'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },

    // The main form module
    '@apostrophecms/form': {
      options: {
        shortcut: 'a,f'
      }
    },
    // The form widget module, allowing editors to add forms to content areas
    '@apostrophecms/form-widget': {},
    // Form field widgets, used by the main form module to build forms.
    '@apostrophecms/form-text-field-widget': {},
    '@apostrophecms/form-textarea-field-widget': {},
    '@apostrophecms/form-select-field-widget': {},
    '@apostrophecms/form-radio-field-widget': {},
    '@apostrophecms/form-file-field-widget': {},
    '@apostrophecms/form-checkboxes-field-widget': {},
    '@apostrophecms/form-boolean-field-widget': {},
    '@apostrophecms/form-conditional-widget': {},

    '@apostrophecms/sitemap': {
      options: {
        excludeTypes: [ 'team-member', 'product' ]
      }
    },
    '@apostrophecms/seo': {},
    '@apostrophecms/open-graph': {},

    // `asset` supports the project's webpack build for client-side assets.
    helper: {},
    asset: {},
    settings: {},

    // The project's first custom page type.
    'default-page': {},
    'content-widget-modules': {
      options: {
        ignoreNoCodeWarning: true
      }
    },
    'pieces-modules': {
      options: {
        ignoreNoCodeWarning: true
      }
    }
  }
});
