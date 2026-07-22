document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('nav');
  var trigger = document.querySelector('.hero, .page-header');
  if (!nav) return;
  var threshold = trigger ? trigger.offsetHeight - 64 : 80;

  function updateNav() {
    if (window.scrollY > threshold) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
});
