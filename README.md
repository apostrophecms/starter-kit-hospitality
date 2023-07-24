# Apostrophe Theme

## Get started

Install dependencies: `npm install`

## Create Admin user
node app @apostrophecms/user:add admin admin

## Theming set up details

To make use of theming, you must update the theme value (preset to the 'hospitality' theme):

-  Within the app.js file (for setting a .env please see: 'Making use of the .env set up' section in this readme):
    ```
    const theme = process.env.theme || 'hospitality';
    ```
      The above variable is applied as the shortName value for the database naming:
    ```
      shortName: process.env.APOS_BASE_URL ? `apos-theme-${theme}` : 'apos-theme',
    ```
      , as well as being passed through a settings module which allows for the value to be used within the nunjuck templates as:
    ```
      {{ apos.modules.settings.options.theme }}
    ```
      or in a conditional as:
    ```
      {% if apos.modules.settings.options.theme === 'marketing' %}
       ...
      {% endif %}
    ```

- Font types to use (File location: views/layout.html, inside the {% beforeMain %} nunjucks tag):
    ```
    {% if apos.modules.settings.options.theme === 'marketing'%}
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,700&family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    {% else %}
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet">
    {% endif %}
    ```

- Apply the themed SCSS Style sheet (file location: modules/asset/ui/src/scss/_theme.scss).

  *NB: The themed SCSS Style sheet values are not controlled by the .env THEME variable setting and have to be change within the _theme.scss file
  
  To apply a themes styling, you will uncomment the theme scss @import reference, and comment out any other @imports, see example below:
    ```
    @import "./_theme-hospitality";
    // @import "./_theme-marketing";
    ```

## Making use of the .env set up

There is a .env.sample file locate within the top level directory. To set up the .env file:

 - Either rename this file to .env or,
 - Add a new file named .env and copy the contents from .env.sample

Next, these varibles need to have values set:

THEME= value should be either hospitality or marketing, depending on the theme you wish to apply
GEOCODER_API_KEY= must be the value of the geocoder provider

## Running the project

Run `npm run dev` to build the Apostrophe UI and start the site up. Remember, this is during alpha development, so we're all in "dev mode." The `dev` script will watch for saves in client-side CSS and Javascript and trigger a build and page refresh if they are detected. It will also restart the app when server-side code is saved.

## Making it your own

This boilerplate is designed so you can install and start running it right away. If you are starting a project that will go into production one day, there are a few things you should be sure to check:

- [ ] **Update the shortname.** The `shortname` option in `app.js` is used for the database name (unless another is given in the `@apostrophecms/db` module). You should change this to an appropriate project name before you start adding any users or content you would like to keep.
- [ ] **Update the Express.js session secret.** The secret is set to `undefined` initially in the `modules/@apostrophecms/express/index.js` file. You should update this to a unique string.
- [ ] **Decide if you want hot reloading on.** This boilerplate uses nodemon to restart the app when files are changed. In `modules/@apostrophecms/asset/index.js` there is an option enabled to refresh the browser on restart. If you like this, do nothing. If you don't, remove the option or set it to `false`. The option has no effect when the app is in production.
- [ ] **Update the `className` options in `app.js`.** This option is set for core widget types to provide CSS styling hooks. It is namespaced with `bp-` for "boilerplate." You will likely want to update that to match your general CSS class naming practices.

## Apostrophecms module extensions
The below Apostrophecms extensions have been included within this themes main apostrophecms app.js file.

- [ ] **@apostrophecms/form.** Allows editors to create their own forms for gathering and delivering user input.
(View extension - https://apostrophecms.com/extensions/form-builder-3-x) 
- [ ] **@apostrophecms/open-graph.** Provides a way to edit metadata for Facebook's Open Graph standard.
(View extension - https://apostrophecms.com/extensions/open-graph-tools-3) 
- [ ] **@apostrophecms/seo.** SEO configuration for ApostropheCMS 3.x. Adds useful meta fields to all pages and pieces.
(View extension - https://github.com/apostrophecms/apostrophe-seo)
- [ ] **@apostrophecms/sitemap.** Generates XML and plaintext sitemaps for sites in Apostrophe 3.x.
(View extension - https://apostrophecms.com/extensions/site-maps-3-x)

## Themes imported NPM Packages
- [ ] **dotenv.** "dotenv" is a npm package that loads environment variables from a .env file. It's useful for securely storing sensitive information like API keys, passwords, and other configuration settings.

    The import statement should only be set within the main apostrophecms app.js file:
    ```
    require('dotenv').config();
    
    ```
    You can then reference environment variables within the server js files for apostrophe,
    
    ```
    const port = process.env.PORT || 3000;
    const dbHost = process.env.DB_HOST || 'localhost';
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;
    ```
- [ ] **rfs (Responsive Font Sizing).** The "rfs" package is a node.js module that provides a simple way to create responsive and fluid typography in CSS. It allows you to define font sizes using a unitless value (usually "rem") and automatically adjust them based on the viewport or container width. 

    Mainly used within modules/asset/ui/src/_typography.scss file for consistent rem based font sizing. Usage applied to headings and paragraphs.
    
    E.g ``` @include font-size($h1-font-size)```
    where $h1-font-size is a rem value determined by a base value.
    
    in this theme a default of 16px: ```$h1-font-size: $font-size-base * 3; // 48px```

- [ ] **swiper (Slideshows).** The "swiper" package is a JavaScript library for creating responsive and touch-enabled sliders, carousels, and other interactive content on the web. It's usage within this theme is located at modules/content-widget-modules/image-gallery-widget

    You can import it in your JavaScript file using the import statement:
    ```
    import Swiper from 'swiper/bundle';
    ```
    Then, you can create a new instance of the "swiper" class and pass in a configuration object with your desired options. For example:
    ```
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And more...
    });
    ```
- [ ] **photoswipe (Lightbox)** "PhotoSwipe Lightbox" is a plugin for the popular JavaScript library "PhotoSwipe" that simplifies the process of creating responsive image galleries with lightbox functionality. It offers an easy-to-use API for adding lightboxes to your images, and is highly customizable and flexible.

    It's usage within this theme is located at modules/content-widget-modules/image-gallery-widget, and is applied in conjunction with the swiper npm package.
    
    You can import it in your JavaScript file using the import statement:
    
    ```
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import PhotoSwipe from 'photoswipe';
    ```
    Then, you can create a new instance of the "Photoswiper lightbox" class and pass in a configuration object with your desired options. For example:
    ```
    // Photoswiper lightbox and gallery
    const photoSwipeOptions = {
        gallery: '#imageGallery',
        pswpModule: PhotoSwipe,
        // set background opacity
        bgOpacity: 1,
        showHideOpacity: true,
        children: 'a',
        loop: true,
        showHideAnimationType: 'fade', /* options: fade, zoom, none */
        
        /* Click on image moves to the next slide */
        imageClickAction: 'next',
        tapAction: 'next',
        
        /* ## Hiding a specific UI element ## */
        zoom: false,
        close: true,
        counter: true,
        arrowKeys: true
    };
    
    const lightbox = new PhotoSwipeLightbox(photoSwipeOptions);
    
    lightbox.init();
    ```

- [ ] **Node-geocoder** is an npm package that simplifies geocoding and reverse-geocoding in Node.js. It supports various geocoding services, allowing developers to convert addresses to coordinates and vice versa with ease.

    See a basic example of this package below:
    ```
    const NodeGeocoder = require('node-geocoder');
    ```
    Then, you can create a new instance of the "Map" class and add one or more layers to it. For example:
    ```
    const options = {
      // For a full list of the node-geocoder npm package options please view the modules documentation - https://www.npmjs.com/package/node-geocoder
      // Requred
      provider: 'mapbox',
    
      // Optional depending on the providers
      apiKey: 'include provider apikey', // for Mapquest, OpenCage, Google Premier
      formatter: null, // 'gpx', 'string', ...
      minConfidence: 0.5,
      limit: 1
    };
    const geocoder = NodeGeocoder(options);
    const geocoderAddress = await geocoder.geocode(data.widget.address);
    ```

- [ ] **ol (Maps)** The "ol" package is a JavaScript library for creating interactive maps on the web. It's usage within this theme is located at modules/content-widget-modules/map-widget

    See a basic example of this package below:
    ```
    import { Map, View } from 'ol';
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';
    ```
    Then, you can create a new instance of the "Map" class and add one or more layers to it. For example:
    ```
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    ```

- [ ] **AOS (Animations)** Animate On Scroll (AOS) library allows you to animate elements as you scroll down and up. If you scroll back to top, elements will animate to it's previous state and are ready to animate again if you scroll down.

    You can import it in your JavaScript file (modules/asset/ui/src/index.js) using the import statement:
    
    ```
    import AOS from 'aos';
    ```
    Then, initialize AOS. For example:
    
    ```
    AOS.init();
    ```
    
    For usage within this theme, Create an instance of 'aosSchema' in your widget and add as field. For example:
    
    ```
    const aosSchema = require('../../../lib/aosSchema.js');
    
    add: {
      ...aosSchema
    }
    ```

## You really want the docs

Right now, [all the juicy info is in the A3 docs](https://a3.docs.apostrophecms.org), so head over there and start reading! This boilerplate project is a fun introduction to the UI, but you'll want to know more to really try it out.