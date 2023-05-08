# Apostrophe 3 demo and test project

## Get started

Install dependencies: `npm install`

## Running the project

Run `npm run dev` to build the Apostrophe UI and start the site up. Remember, this is during alpha development, so we're all in "dev mode." The `dev` script will watch for saves in client-side CSS and Javascript and trigger a build and page refresh if they are detected. It will also restart the app when server-side code is saved.

## Making it your own

This boilerplate is designed so you can install and start running it right away. If you are starting a project that will go into production one day, there are a few things you should be sure to check:

- [ ] **Update the shortname.** The `shortname` option in `app.js` is used for the database name (unless another is given in the `@apostrophecms/db` module). You should change this to an appropriate project name before you start adding any users or content you would like to keep.
- [ ] **Update the Express.js session secret.** The secret is set to `undefined` initially in the `modules/@apostrophecms/express/index.js` file. You should update this to a unique string.
- [ ] **Decide if you want hot reloading on.** This boilerplate uses nodemon to restart the app when files are changed. In `modules/@apostrophecms/asset/index.js` there is an option enabled to refresh the browser on restart. If you like this, do nothing. If you don't, remove the option or set it to `false`. The option has no effect when the app is in production.
- [ ] **Update the `className` options in `app.js`.** This option is set for core widget types to provide CSS styling hooks. It is namespaced with `bp-` for "boilerplate." You will likely want to update that to match your general CSS class naming practices.

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
## You really want the docs

Right now, [all the juicy info is in the A3 docs](https://a3.docs.apostrophecms.org), so head over there and start reading! This boilerplate project is a fun introduction to the UI, but you'll want to know more to really try it out.

