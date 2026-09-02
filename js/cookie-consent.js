(function () {
  if (localStorage.getItem('alkras-consent')) return;

  var isRu = window.location.pathname.indexOf('/ru/') !== -1;

  var txt = isRu
    ? 'Этот сайт загружает шрифты через Google Fonts и сохраняет ваш языковой выбор локально. Аналитика и отслеживание в настоящее время не используются.'
    : 'This site loads fonts from Google Fonts and stores your language preference locally. No analytics or tracking are currently active.';

  var acceptLabel   = isRu ? 'Принять'         : 'Accept';
  var necessaryLabel = isRu ? 'Только необходимые' : 'Necessary only';

  var banner = document.createElement('div');
  banner.id = 'alkras-consent-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', isRu ? 'Уведомление о файлах cookie' : 'Cookie notice');
  banner.style.cssText = [
    'position:fixed',
    'bottom:0',
    'left:0',
    'right:0',
    'z-index:9999',
    'background:#0d0d18',
    'border-top:1px solid rgba(255,255,255,0.1)',
    'padding:14px 32px',
    'display:flex',
    'align-items:center',
    'gap:24px',
    'flex-wrap:wrap',
    'font-family:Inter,system-ui,sans-serif',
    'font-size:13px',
    'color:rgba(255,255,255,0.65)',
    'line-height:1.5'
  ].join(';');

  var msg = document.createElement('p');
  msg.style.cssText = 'margin:0;flex:1;min-width:220px;';
  msg.textContent = txt;

  var btnWrap = document.createElement('div');
  btnWrap.style.cssText = 'display:flex;gap:10px;flex-shrink:0;';

  function makeBtn(label, primary) {
    var b = document.createElement('button');
    b.textContent = label;
    b.style.cssText = primary
      ? 'background:#D7263D;color:#fff;border:none;padding:8px 20px;border-radius:2px;font-family:inherit;font-size:13px;font-weight:600;cursor:pointer;letter-spacing:.03em;white-space:nowrap;'
      : 'background:transparent;color:rgba(255,255,255,0.5);border:1px solid rgba(255,255,255,0.18);padding:8px 20px;border-radius:2px;font-family:inherit;font-size:13px;cursor:pointer;letter-spacing:.03em;white-space:nowrap;';
    return b;
  }

  var acceptBtn    = makeBtn(acceptLabel, true);
  var necessaryBtn = makeBtn(necessaryLabel, false);

  function dismiss(choice) {
    localStorage.setItem('alkras-consent', choice);
    banner.style.display = 'none';
  }

  acceptBtn.addEventListener('click', function () { dismiss('all'); });
  necessaryBtn.addEventListener('click', function () { dismiss('necessary'); });

  btnWrap.appendChild(acceptBtn);
  btnWrap.appendChild(necessaryBtn);
  banner.appendChild(msg);
  banner.appendChild(btnWrap);

  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(banner);
  });
})();
