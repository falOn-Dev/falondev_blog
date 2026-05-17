/* ── Theme toggle ─────────────────────────────────────────── */

(function () {
  var stored = localStorage.getItem('theme');
  if (stored) document.documentElement.className = stored;
})();

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function updateBtn() {
    btn.textContent = document.documentElement.classList.contains('light')
      ? '[ dark ]'
      : '[ light ]';
  }
  updateBtn();

  btn.addEventListener('click', function () {
    var isLight = document.documentElement.classList.contains('light');
    document.documentElement.className = isLight ? 'dark' : 'light';
    localStorage.setItem('theme', document.documentElement.className);
    updateBtn();
  });
});

/* ── Copy buttons ─────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.post-content pre').forEach(function (pre) {
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = '[ copy ]';
    btn.addEventListener('click', function () {
      var code = pre.querySelector('code');
      var text = code ? code.innerText : pre.innerText;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = '[ copied ]';
        setTimeout(function () { btn.textContent = '[ copy ]'; }, 2000);
      });
    });
    pre.appendChild(btn);
  });
});

/* ── Back to top ──────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 300);
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
