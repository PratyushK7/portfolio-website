// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle — cyanotype (dark) by default, the signature look.
// data-theme was already set synchronously in <head> to avoid a flash.
const themeToggle = document.getElementById('themeToggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeMeta) themeMeta.setAttribute('content', theme === 'light' ? '#eef3f9' : '#0b2b4e');
  if (themeToggle) themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to cyanotype' : 'Switch to blueline');
};
applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });
}

// Nav scroll state
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
navToggle.addEventListener('click', () => {
  const open = navToggle.classList.toggle('open');
  navMobile.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});
navMobile.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach((el) => revealObserver.observe(el));
