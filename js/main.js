document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'CLOSE' : 'MENU';
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'MENU';
      });
    });
  }

  // Lightbox for [data-lightbox] images
  const lightboxTriggers = document.querySelectorAll('[data-lightbox]');
  if (lightboxTriggers.length) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<span class="lightbox-close">&#x2715;</span><img src="" alt="">';
    document.body.appendChild(overlay);
    const lbImg = overlay.querySelector('img');

    lightboxTriggers.forEach(img => {
      img.addEventListener('click', () => {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        overlay.classList.add('is-open');
      });
    });

    overlay.addEventListener('click', (e) => {
      if (e.target !== lbImg) overlay.classList.remove('is-open');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') overlay.classList.remove('is-open');
    });
  }

  // Contact form: no backend yet — placeholder confirmation only.
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.querySelector('#form-note');
      if (note) {
        note.textContent = 'Form submission isn\'t wired up yet — this page needs an email service or backend endpoint before it goes live.';
        note.style.color = '#D7263D';
      }
    });
  }
});
