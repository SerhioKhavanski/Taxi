const cards = document.querySelectorAll('.why-us .card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cards.forEach(card => card.classList.add('show-card'));
    } else {
      cards.forEach(card => card.classList.remove('show-card'));
    }
  });
}, { threshold: 0.5 }); // Блок считается "в зоне", если 50% видно

observer.observe(document.querySelector('.why-us'));