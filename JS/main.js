window.addEventListener('DOMContentLoaded', () => {
  const glassPanel = document.querySelector('.glass-panel');
  const heroContent = document.querySelector('.hero-content');

  // Подожди немного перед анимацией, если нужно
  setTimeout(() => {
    glassPanel.classList.add('show');
    heroContent.classList.add('show-content');
  }, 200); // задержка в мс
});