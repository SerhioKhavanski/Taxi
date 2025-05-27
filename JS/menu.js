const header = document.querySelector('header');
const stickyMenu = document.querySelector('.sticky-menu');

window.addEventListener('scroll', () => {
  const headerBottom = header.offsetTop + header.offsetHeight;

  if (window.scrollY > headerBottom) {
    stickyMenu.classList.add('visible');
  } else {
    stickyMenu.classList.remove('visible');
  }
});