const target = document.querySelector('.about-img');

const observerImg = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      target.classList.add('show-img');
    } else {
      target.classList.remove('show-img');
    }
  });
}, { threshold: 0.5 });

if (target) {
    observerImg.observe(target);
}