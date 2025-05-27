const observerRequirements = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const items = entry.target.querySelectorAll('.requirements-info-point');
  
      if (entry.isIntersecting) {
        items.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('show-requirements');
          }, i * 150); // задержка между появлениями
        });
      } else {
        items.forEach((el) => {
          el.classList.remove('show-requirements');
        });
      }
    });
  }, {
    threshold: 0.3,
  });
  
  const section = document.querySelector('.requirements-info');
  if (section) {
    observerRequirements.observe(section);
  }
  