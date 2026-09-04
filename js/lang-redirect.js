(function() {
  // Only run on the homepage
  if (window.location.pathname.split('/').filter(Boolean).pop() !== 'index.html' &&
      !window.location.pathname.endsWith('/Alkras/') &&
      !window.location.pathname.endsWith('/')) return;
  var pref = localStorage.getItem('alkras-lang');
  // Default to Russian for first-time visitors (no saved preference yet).
  // Once a visitor picks EN explicitly, that choice is remembered and respected.
  if (pref !== 'en' && window.location.pathname.indexOf('/ru/') === -1) {
    window.location.replace('ru/index.html');
  }
})();
