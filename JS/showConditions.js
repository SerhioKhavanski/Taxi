const observerCondition = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const points = entry.target.querySelectorAll('.conditions-info-text-points-wrapper');
        points.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('show-condition');
          }, index * 150); // задержка между элементами
        });
      } else {
        const points = entry.target.querySelectorAll('.conditions-info-text-points-wrapper');
        points.forEach(el => el.classList.remove('show-condition'));
      }
    });
  }, { threshold: 0.4 });

  const conditionsBlock = document.querySelector('.conditions-info-text');
  if (conditionsBlock) {
    observerCondition.observe(conditionsBlock);
  }