const router = require('express').Router();
const MainPage = require('../views/MainPage');
const { Book, Like } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    const likes = await Like.findAll({ raw: true }); // { where: { userId: req.session.userid } }
    res.renderComponent(MainPage, { title: 'Main page', books, likes });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
