if (localStorage.getItem('site-disabled') === 'true') {
  document.body.innerHTML = '<div style="text-align:center; padding:2rem; font-size:1.5rem; color:#fff; background:#000;">🪿 Сайт временно отключён по решению Гуся.</div>';
}
window.addEventListener('DOMContentLoaded', () => {
  const glassPanel = document.querySelector('.glass-panel');
  const heroContent = document.querySelector('.hero-content');

  // Подожди немного перед анимацией, если нужно
  setTimeout(() => {
    glassPanel.classList.add('show');
    heroContent.classList.add('show-content');
  }, 200); // задержка в мс
});
document.querySelector('.map-overlay').addEventListener('click', function () {
  this.style.display = 'none';
});