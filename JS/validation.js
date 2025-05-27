const form = document.querySelector('.work-wrapper-form');
const inputs = form.querySelectorAll('input[type="text"], select');
const checkbox = form.querySelector('#checkForm');
const phoneRegex = /^\+?\d{10,15}$/;

form.addEventListener('submit', function (e) {
  let hasError = false;

  // Удаляем все предыдущие ошибки
  inputs.forEach(input => {
    input.classList.remove('input-error');
    const msg = input.parentElement.querySelector('.error-message');
    if (msg) msg.remove();
  });

  // Проверка всех input и select
  inputs.forEach(input => {
    const value = input.value.trim();

    // Проверка на пустоту
    if (!value) {
      hasError = true;
      input.classList.add('input-error');

      const errorText = document.createElement('div');
      errorText.className = 'error-message';
      errorText.textContent = 'Поле обязательно для заполнения';
      input.parentElement.appendChild(errorText);
    }

    // Дополнительная проверка телефона по id
    if (
      input.id === "phone" &&
      value &&
      !phoneRegex.test(value)
    ) {
      hasError = true;
      input.classList.add('input-error');

      const errorText = document.createElement('div');
      errorText.className = 'error-message';
      errorText.textContent = 'Введите корректный номер телефона';
      input.parentElement.appendChild(errorText);
    }
  });

  // Проверка чекбокса
  const checkboxLabel = form.querySelector('label[for="#checkForm"]');
  checkbox.classList.remove('input-error');
  const existingMsg = checkboxLabel.querySelector('.error-message');
  if (existingMsg) existingMsg.remove();

  if (!checkbox.checked) {
    hasError = true;
    checkbox.classList.add('input-error');

    const errorText = document.createElement('div');
    errorText.className = 'error-message';
    errorText.textContent = 'Необходимо согласие';
    checkboxLabel.appendChild(errorText);
  }

  // Если были ошибки — отменяем отправку
  if (hasError) {
    e.preventDefault();
  }
});