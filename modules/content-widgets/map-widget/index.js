// TODO: Set up to be based off of map api requirements

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Map'
    // icon: 'map-icon'
  },
  fields: {
    add: {
      latitude: {
        type: 'string',
        label: 'Latitude',
        required: true
      },
      longitude: {
        type: 'string',
        label: 'Latitude',
        required: true
      },
      mapZoomLevel: {
        type: 'integer',
        label: 'Map Zoom Level',
        min: 1,
        max: 14,
        def: 9
      }
    }
  }
};