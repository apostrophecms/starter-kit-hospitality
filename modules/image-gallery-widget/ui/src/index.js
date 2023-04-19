// import Swiper JS
import Swiper from 'swiper/bundle';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

export default () => {
  apos.util.widgetPlayers['image-gallery'] = {
    selector: '[data-image-gallery]',
    player: function (el) {
      const slides = el.dataset.slides || 1;

      // Swiper.js slideshow
      const swiper = new Swiper(el, {
        slidesPerView: slides,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });

      // Photoswiper lightbox and gallery
      const photoSwipeOptions = {
        gallery: '#imageGallery',
        pswpModule: PhotoSwipe,
        // set background opacity
        bgOpacity: 1,
        showHideOpacity: true,
        children: 'a',
        loop: true,
        showHideAnimationType: 'zoom', /* options: fade, zoom, none */

        /* Click on image moves to the next slide */
        imageClickAction: 'next',
        tapAction: 'next',

        /* ## Hiding a specific UI element ## */
        // zoom: false,
        close: true,
        counter: true,
        arrowKeys: true
      };

      const lightbox = new PhotoSwipeLightbox(photoSwipeOptions);

      lightbox.init();

      lightbox.on('change', () => {
        const { pswp } = lightbox;
        swiper.slideTo(pswp.currIndex, 0, false);
      });

      lightbox.on('afterInit', () => {
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.stop();
        };
      });


      lightbox.on('closingAnimationStart', () => {
        const { pswp } = lightbox;
        swiper.slideTo(pswp.currIndex, 0, false);
        /* if autoplay enabled == true -> autoplay.start() when close lightbox */
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      });
    }
  };
};
