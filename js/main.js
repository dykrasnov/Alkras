document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const toggleIcon = toggle ? toggle.querySelector('.nav-toggle-icon') : null;
  const siteNav = document.querySelector('.site-nav');
  const desktopLinks = document.querySelector('.nav-links');

  // Desktop dropdown nav (Industrial / Anti-Drone hover panels, >760px):
  // click to open/close, Escape to close, outside click to close.
  document.querySelectorAll('.site-nav .has-dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 760) return; // mobile uses the sidebar instead
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

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-nav .has-dropdown')) {
      document.querySelectorAll('.site-nav .has-dropdown').forEach(el => {
        el.classList.remove('is-open');
        el.querySelector('a').setAttribute('aria-expanded', 'false');
      });
    }
  });

  // ---------- Mobile slide-in sidebar ----------
  // Built from the existing (desktop) .nav-links markup so every page's
  // real links/labels/aria-current are reused automatically — no
  // per-page duplication to keep in sync.
  let sidebar = null;
  let sidebarOverlay = null;
  let sidebarOpen = false;

  if (toggle && siteNav && desktopLinks) {
    const menuLabel = toggle.getAttribute('aria-label') || 'Menu';
    const closeLabel = /меню/i.test(menuLabel) ? 'Закрыть' : 'Close';

    sidebarOverlay = document.createElement('div');
    sidebarOverlay.className = 'mobile-sidebar-overlay';

    sidebar = document.createElement('div');
    sidebar.className = 'mobile-sidebar';
    sidebar.setAttribute('role', 'dialog');
    sidebar.setAttribute('aria-modal', 'true');
    sidebar.setAttribute('aria-label', menuLabel);

    const header = document.createElement('div');
    header.className = 'mobile-sidebar-header';
    const brandLogo = document.querySelector('.brand .brand-logo');
    if (brandLogo) {
      const logo = brandLogo.cloneNode(true);
      header.appendChild(logo);
    }
    sidebar.appendChild(header);

    const nav = document.createElement('ul');
    nav.className = 'mobile-sidebar-nav';

    Array.from(desktopLinks.children).forEach(li => {
      if (li.classList.contains('lang-toggle')) {
        const langItem = document.createElement('li');
        langItem.className = 'mobile-sidebar-lang';
        Array.from(li.childNodes).forEach(node => langItem.appendChild(node.cloneNode(true)));
        nav.appendChild(langItem);
        return;
      }

      const topLink = li.querySelector(':scope > a');
      const dropdown = li.querySelector(':scope > .nav-dropdown');

      if (dropdown) {
        const item = document.createElement('li');
        item.className = 'mobile-sidebar-item';

        const parentToggle = document.createElement('button');
        parentToggle.type = 'button';
        parentToggle.className = 'mobile-sidebar-parent-toggle';
        parentToggle.setAttribute('aria-expanded', 'false');
        const label = document.createElement('span');
        label.textContent = topLink ? topLink.textContent : '';
        const caret = document.createElement('span');
        caret.className = 'mobile-sidebar-caret';
        caret.setAttribute('aria-hidden', 'true');
        caret.innerHTML = '&#9662;';
        parentToggle.appendChild(label);
        parentToggle.appendChild(caret);

        parentToggle.addEventListener('click', () => {
          const isOpen = item.classList.toggle('is-open');
          parentToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        item.appendChild(parentToggle);

        const submenu = document.createElement('ul');
        submenu.className = 'mobile-sidebar-submenu';
        Array.from(dropdown.children).forEach(sub => {
          const subLi = document.createElement('li');
          subLi.appendChild(sub.cloneNode(true));
          submenu.appendChild(subLi);
        });
        item.appendChild(submenu);

        nav.appendChild(item);
      } else if (topLink) {
        const item = document.createElement('li');
        item.appendChild(topLink.cloneNode(true));
        nav.appendChild(item);
      }
    });

    sidebar.appendChild(nav);
    document.body.appendChild(sidebarOverlay);
    document.body.appendChild(sidebar);

    const setIcon = (open) => {
      if (toggleIcon) toggleIcon.innerHTML = open ? '&#215;' : '&#9776;';
      toggle.setAttribute('aria-label', open ? closeLabel : menuLabel);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    const openSidebar = () => {
      sidebarOpen = true;
      sidebar.classList.add('is-open');
      sidebarOverlay.classList.add('is-open');
      document.documentElement.classList.add('mobile-sidebar-lock');
      document.body.classList.add('mobile-sidebar-lock');
      setIcon(true);
    };

    const closeSidebar = () => {
      sidebarOpen = false;
      sidebar.classList.remove('is-open');
      sidebarOverlay.classList.remove('is-open');
      document.documentElement.classList.remove('mobile-sidebar-lock');
      document.body.classList.remove('mobile-sidebar-lock');
      setIcon(false);
    };

    toggle.addEventListener('click', () => {
      if (sidebarOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    sidebarOverlay.addEventListener('click', closeSidebar);

    sidebar.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeSidebar);
    });

    window.addEventListener('resize', () => {
      if (sidebarOpen && window.innerWidth > 760) closeSidebar();
    });

    window.__closeMobileSidebar = closeSidebar;
    window.__isMobileSidebarOpen = () => sidebarOpen;
  }

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

  // Shared Escape handler: close whichever overlay (lightbox, mobile
  // sidebar, or a desktop dropdown) is currently open, without one
  // stepping on the other.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (overlay.classList.contains('is-open')) {
      overlay.classList.remove('is-open');
    } else if (window.__isMobileSidebarOpen && window.__isMobileSidebarOpen()) {
      window.__closeMobileSidebar();
    } else {
      document.querySelectorAll('.site-nav .has-dropdown.is-open').forEach(el => {
        el.classList.remove('is-open');
        el.querySelector('a').setAttribute('aria-expanded', 'false');
      });
    }
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
