import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector.js';
import XYZ from 'ol/source/XYZ';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import VectorSource from 'ol/source/Vector.js';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';

export default () => {
  if (document.querySelector('[data-map]')) {
    apos.util.widgetPlayers.map = {
      selector: '[data-map]',
      player: function (el) {

        apos.util.onReady(() => {
          // Define the latitude and longitude variables
          const latitude = el.dataset.latitude || -29.02251;
          const longitude = el.dataset.longitude || 28.01546;

          // Convert the latitude and longitude to the map's projection
          const coords = fromLonLat([longitude, latitude]);

          const map = new Map({
            layers: [
              new TileLayer({
                source: new XYZ({
                  url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
              })
            ],
            view: new View({
              center: coords,
              zoom: el.dataset.mapzoomlevel
            }),
            target: el.querySelector('.map')
          });

          // Define the dynamic position variable
          let position = coords;

          // Update the position variable with new latitude and longitude values
          function updatePosition(lat, lng) {
            const newCoords = fromLonLat([lng, lat]);
            position = newCoords;
          }

          // Define the icon style
          const iconStyle = new Style({
            image: new Icon({
              src: apos.util.assetUrl('/modules/map-widget/map-icon.png'),
              scale: 0.05
            })
          });

          // Create a marker with the dynamic position variable and the icon style
          const marker = new Feature({
            geometry: new Point(position)
          });
          marker.setStyle(iconStyle);

          // Add the marker to a vector layer
          const vectorLayer = new VectorLayer({
            source: new VectorSource({
              features: [marker]
            })
          });

          // Add the vector layer to the map
          map.addLayer(vectorLayer);

          // Update the marker position whenever the position variable changes
          setInterval(function () {
            marker.getGeometry().setCoordinates(position);
          }, 1000);

          // Call the updatePosition function with new latitude and longitude values
          updatePosition(latitude, longitude);
        });

      }
    };
  }
};
