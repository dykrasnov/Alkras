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

  // Dropdown nav: click to open/close, Escape to close, outside click to close
  document.querySelectorAll('.site-nav .has-dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const li = link.closest('.has-dropdown');
      const isOpen = li.classList.contains('is-open');
      document.querySelectorAll('.site-nav .has-dropdown').forEach(el => {
        el.classList.remove('is-open');
        el.querySelector('a').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        li.classList.add('is-open');
        link.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.site-nav .has-dropdown').forEach(el => {
        el.classList.remove('is-open');
        el.querySelector('a').setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-nav .has-dropdown')) {
      document.querySelectorAll('.site-nav .has-dropdown').forEach(el => {
        el.classList.remove('is-open');
        el.querySelector('a').setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Lightbox for [data-lightbox] images
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<span class="lightbox-close">&#x2715;</span><img src="" alt="">';
  document.body.appendChild(overlay);
  const lbImg = overlay.querySelector('img');

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-lightbox]');
    if (trigger && trigger.tagName === 'IMG') {
      lbImg.src = trigger.src;
      lbImg.alt = trigger.alt;
      overlay.classList.add('is-open');
    }
  });

  overlay.querySelector('.lightbox-close').addEventListener('click', () => {
    overlay.classList.remove('is-open');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target !== lbImg) overlay.classList.remove('is-open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.classList.remove('is-open');
  });

  // Crosshair / dev-model video: autoplay when scrolled into view
  const crosshairVideo = document.querySelector('.crosshair-video');
  if (crosshairVideo) {
    crosshairVideo.muted = true;
    crosshairVideo.playsInline = true;

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          crosshairVideo.play().catch(() => {});
        } else {
          crosshairVideo.pause();
        }
      });
    }, { threshold: 0.5 });

    videoObserver.observe(crosshairVideo);
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
