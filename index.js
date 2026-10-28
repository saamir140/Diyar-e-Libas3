/* Diyar-e-Libas homepage interactions only */
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        menuButton.focus();
      }
    });
  }

  document.querySelectorAll('.swatch[data-product][data-image]').forEach(button => {
    button.addEventListener('click', () => {
      const product = button.dataset.product;
      const index = button.dataset.index;
      const image = button.dataset.image;
      const mainImage = document.querySelector(`[data-main-image="${product}"]`);
      const status = document.querySelector(`[data-status="${product}"]`);
      if (mainImage) {
        mainImage.src = image;
        mainImage.alt = `${product === 'ww' ? 'Wash & Wear' : 'Legend Winter Cotton'} supplier photo sample ${index}; unstitched fabric`;
      }
      document.querySelectorAll(`.swatch[data-product="${product}"]`).forEach(swatch => {
        const selected = swatch === button;
        swatch.classList.toggle('is-selected', selected);
        swatch.setAttribute('aria-pressed', String(selected));
      });
      if (status) status.textContent = `Sample ${String(index).padStart(2, '0')} selected · exact shade name to be confirmed`;
    });
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
