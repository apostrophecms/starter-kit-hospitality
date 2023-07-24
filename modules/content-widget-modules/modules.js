module.exports = {
  // Widgets
  'accordion-widget': {},
  'button-widget': {},
  'button-strip-widget': {},
  'call-to-action-widget': {},
  'columns-widget': {},
  'custom-form-widget': {},
  'image-gallery-widget': {},
  'map-widget': {
    options: {
      geocoderSettings: {
        // For a full list of the node-geocoder npm package options please view the modules documentation - https://www.npmjs.com/package/node-geocoder
        // Requred
        provider: 'mapbox',

        // Optional depending on the providers
        apiKey: process.env.GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
        formatter: null, // 'gpx', 'string', ...
        minConfidence: 0.5,
        limit: 1
      }
    }
  },
  'pricing-widget': {},
  'side-by-side-widget': {},
  'image-widget': {},
  'rich-text-widget': {}
};
