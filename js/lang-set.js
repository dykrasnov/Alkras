(function() {
  var isRu = window.location.pathname.indexOf('/ru/') !== -1;
  localStorage.setItem('alkras-lang', isRu ? 'ru' : 'en');
})();
