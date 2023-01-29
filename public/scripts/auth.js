document.querySelector('#sign_up')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { name, password } = e.target;
  const res = await fetch('/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({ name: name.value, password: password.value }),
  });
  const data = await res.json();
  if (data.message === 'ok') {
    window.location.assign('/');
  } else {
    document.querySelector('.error').innerHTML = data.message;
  }
});

document.querySelector('#sign_in')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { name, password } = e.target;
  const res = await fetch('/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({ name: name.value, password: password.value }),
  });
  const data = await res.json();
  if (data.message === 'ok') {
    window.location.assign('/');
  } else {
    document.querySelector('.error').innerHTML = data.message;
  }
});
