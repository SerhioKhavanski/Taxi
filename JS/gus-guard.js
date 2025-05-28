if (localStorage.getItem('siteDisabled') === 'true') {
    const blocker = document.createElement('div');
    blocker.style.position = 'fixed';
    blocker.style.top = '0';
    blocker.style.left = '0';
    blocker.style.width = '100vw';
    blocker.style.height = '100vh';
    blocker.style.background = '#000000d9';
    blocker.style.color = '#fff';
    blocker.style.display = 'flex';
    blocker.style.alignItems = 'center';
    blocker.style.justifyContent = 'center';
    blocker.style.fontSize = '24px';
    blocker.style.zIndex = '9999';
    blocker.innerText = '🚫 Сайт временно недоступен';
    document.body.appendChild(blocker);
  }