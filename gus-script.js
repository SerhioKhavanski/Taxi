const correctPassword = 'honkhonk123';
const submitBtn = document.getElementById('gus-submit');
const disableBtn = document.getElementById('disable-site');
const enableBtn = document.getElementById('enable-site');
const message = document.getElementById('status-message');
const actions = document.getElementById('actions');

submitBtn.addEventListener('click', () => {
  const input = document.getElementById('gus-password').value;

  if (input === correctPassword) {
    message.textContent = 'Доступ разрешён. Выберите действие.';
    actions.style.display = 'block';
  } else {
    message.textContent = 'Неверный пароль.';
    actions.style.display = 'none';
  }
});

disableBtn.addEventListener('click', () => {
  localStorage.setItem('site-disabled', 'true');
  alert('Сайт отключён. Гусь доволен. 🪿');
});

enableBtn.addEventListener('click', () => {
  localStorage.removeItem('site-disabled');
  alert('Сайт снова доступен. Гусь ушёл. 🕊️');
});