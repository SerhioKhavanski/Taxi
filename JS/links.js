document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu-a');
  const sections = Array.from(menuLinks).map(link => document.querySelector(link.getAttribute('href')));

  const activateLink = (id) => {
    menuLinks.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  };

  const onScroll = () => {
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
        activateLink(section.id);
      }
    });
  };

  window.addEventListener('scroll', onScroll);

  // Для плавной прокрутки при клике
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});