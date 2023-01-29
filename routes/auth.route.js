const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const AuthorizationPage = require('../views/AuthorizationPage');
const RegistrationPage = require('../views/RegistrationPage');

router.get('/signin', (req, res) => {
  res.renderComponent(AuthorizationPage, { title: 'Sign In' });
});

router.get('/signup', (req, res) => {
  res.renderComponent(RegistrationPage, { title: 'Sign up' });
});

router.post('/signin', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      const user = await User.findOne({ where: { name } });
      if (!user) {
        res.json({ message: 'Неверный логин или пароль!' });
        return;
      }
      const compare = await bcrypt.compare(password, user.password);
      if (user && compare) {
        req.session.userid = user.id;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Неверный логин или пароль!' });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      const user = await User.findOne({ where: { name } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, password: hash });
        req.session.userid = newUser.id;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Такой пользователь уже есть!' });
      }
    }
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('user_sid').redirect('/');
  });
});

module.exports = router;
