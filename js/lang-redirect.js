(function() {
  // Only run on the homepage
  if (window.location.pathname.split('/').filter(Boolean).pop() !== 'index.html' &&
      !window.location.pathname.endsWith('/alkras-site/') &&
      !window.location.pathname.endsWith('/')) return;
  var pref = localStorage.getItem('alkras-lang');
  if (pref === 'ru' && window.location.pathname.indexOf('/ru/') === -1) {
    window.location.replace('ru/index.html');
  }
})();
