(function (w, d) {
  const METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  const DEF_TRIGGER_BY_TAG = {
    FORM: 'submit',
    INPUT: 'change',
    TEXTAREA: 'change',
  };
  const DEF_TRIGGER = 'click';
  const root = d.body;
  function getHxRequestAttrs(el) {
    const attrs = {
      trigger: el.getAttribute('hx-trigger') || DEF_TRIGGER_BY_TAG[el.tagName] || DEF_TRIGGER,
      method: 'GET',
      url: w.location.href,
      target: d.querySelector(el.getAttribute('hx-target')) || el,
      select: el.getAttribute('hx-select'),
      swap: el.getAttribute('hx-swap') || 'innerHTML',
    };
    for (const method of METHODS) {
      const url = el.getAttribute('hx-' + method);
      if (url) {
        attrs.method = method;
        attrs.url = url;
      }
    }
    return attrs;
  }
  const els = root.querySelectorAll('[hx-trigger],[hx-get],[hx-post],[hx-put],[hx-delete],[hx-patch]');
  for (const el of els) {
    const { trigger, method, url, target, select, swap } = getHxRequestAttrs(el);
    el.addEventListener(trigger, function (ev) {
      ev.preventDefault();
      fetch(url, { method, headers: { 'hx-request': true } })
        .then((response) => response.text())
        .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          target[swap] = doc.querySelector(select || 'body').innerHTML;
        });
    });
  }
})(window, document);
