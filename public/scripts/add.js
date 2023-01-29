document.querySelector('#addForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    title, author, img, description,
  } = e.target;
  const res = await fetch('/mybooks', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      title: title.value,
      author: author.value,
      img: img.value,
      description: description.value,
    }),
  });
  const data = await res.text();
  document.querySelector('.book__list').insertAdjacentHTML('beforeend', data);
});
