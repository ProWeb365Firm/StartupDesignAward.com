document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('mainNav').classList.toggle('open');
});

document.querySelectorAll('nav.main-links a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('mainNav').classList.remove('open');
  });
});

document.querySelectorAll('.copyright-year').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
