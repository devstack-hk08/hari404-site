const progress = document.querySelector('.scroll-progress');
const glow = document.querySelector('.cursor-glow');
const stage = document.querySelector('#portraitStage');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? window.scrollY / max * 100 : 0}%`;
}, { passive: true });

window.addEventListener('pointermove', (e) => {
  if (glow) {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }
  if (stage && window.innerWidth > 900) {
    const x = (e.clientX / window.innerWidth - .5) * 9;
    const y = (e.clientY / window.innerHeight - .5) * -7;
    stage.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(0)`;
  }
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

menu?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

// Gentle scroll-linked depth on the portrait, with no dependency or heavy 3D library.
window.addEventListener('scroll', () => {
  if (!stage || window.innerWidth < 900) return;
  const rect = stage.getBoundingClientRect();
  const center = rect.top + rect.height / 2;
  const offset = (center - window.innerHeight / 2) / window.innerHeight;
  stage.style.setProperty('--scroll-depth', `${offset * 18}px`);
}, { passive: true });
