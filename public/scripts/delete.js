document.querySelectorAll('.container').forEach((container) => {
  container.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete')) {
      const { id } = e.target.dataset;
      const res = await fetch(`/mybooks/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data > 0) {
        e.target.closest('.card').remove();
      }
    }
  });
});
