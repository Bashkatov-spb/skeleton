document.querySelector('#editForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { title, author, img, action } = e.target;
  const res = await fetch(action, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      title: title.value,
      author: author.value,
      img: img.value,
    }),
  });
  const data = await res.json();
  if (data.message === 'success') {
    window.location.assign('/');
  } else {
    document.querySelector('.error').innerHTML = data.message;
  }
});
