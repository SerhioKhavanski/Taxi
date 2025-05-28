document.addEventListener("DOMContentLoaded", function () {
    const block = document.querySelector('.why-adaptation');

    // Только если ширина экрана ≤ 768px
    if (window.innerWidth <= 768 && block) {
      const observerWhy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            block.classList.add('visible');
          } else {
            block.classList.remove('visible');
          }
        });
      }, {
        threshold: 0.2 // 20% блока должно быть видно
      });

      observerWhy.observe(block);
    }
  });