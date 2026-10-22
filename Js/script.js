const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// فتح وإغلاق قائمة الهاتف
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

// إغلاق القائمة بعد اختيار أي قسم
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'فتح القائمة');
    menuToggle.textContent = '☰';
  });
});

// إظهار القسم الحالي في القائمة
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(section => observer.observe(section));
}

document.getElementById('year').textContent = new Date().getFullYear();
