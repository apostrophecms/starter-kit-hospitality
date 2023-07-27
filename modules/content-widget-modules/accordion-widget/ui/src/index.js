export default () => {
  apos.util.widgetPlayers.accordion = {
    selector: '[data-accordion]',
    player: function (el) {
      // Find our accordion buttons
      const buttons = el.querySelectorAll('[data-accordion-item]');

      // For each accordion button set up the trigger
      buttons.forEach((button) => {
        const btnEl = button.querySelector('[data-accordion-button]');
        // Find our hidden text
        const target = button.querySelector('[data-accordion-detail]');

        btnEl.addEventListener('click', () => {
          const isExpanded = btnEl.getAttribute('aria-expanded') === 'true';
          // Update the btn's aria attribute
          btnEl.setAttribute('aria-expanded', !isExpanded);
          // Update the `hidden` attribute on the detail
          target.hidden = isExpanded;
        });
      });
    }
  };
};
