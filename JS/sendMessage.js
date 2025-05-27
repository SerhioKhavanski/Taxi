document.querySelector('.work-wrapper-form').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const formData = new FormData(this);
  
    const data = {
      name: formData.getAll('name')[0],
      phone: formData.getAll('phone')[0],
      city: formData.getAll('city')[0],
      vacancy: formData.getAll('vacancy')[0]
    };
  
    const response = await fetch('telegram.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    });
  
    if (response.ok) {
      alert('Успешно отправлено!');
      this.reset();
    } else {
      alert('Ошибка отправки!');
    }
  });