export default () => {
  apos.util.widgetPlayers.accordion = {
    selector: '[data-accordion]',
    player: function (el) {
      // Find our accordion items
      const btn = el.querySelectorAll('.accordion-item');

      // For each accordion button set up the trigger
      btn.forEach((button) => {
        const btn = button.querySelector('[data-accordion-button');
        // Find our hidden text
        const target = button.querySelector('[data-accordion-detail]');

        btn.onclick = () => {
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          // Update the btn's aria attribute
          btn.setAttribute('aria-expanded', !expanded);
          // Update the `hidden` attribute on the detail
          target.hidden = expanded;
        };
      });
    }
  };
};
