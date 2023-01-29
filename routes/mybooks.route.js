const router = require('express').Router();
const MyBooksPage = require('../views/MyBooksPage');
const { Book, Like } = require('../db/models');
const BookView = require('../views/Book');

router.get('/', async (req, res) => {
  try {
    let books;
    let likes;
    if (req.session.userid) {
      books = await Book.findAll({ where: { userId: req.session.userid } });
    }
    res.renderComponent(MyBooksPage, { title: 'My books Page', books, likes });
  } catch ({ message }) {
    res.json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, img } = req.body;
    if (title && author && img && req.session.userid) {
      const newBook = await Book.create({
        title,
        author,
        img,
        userId: req.session.userid,
      });
      res.renderComponent(BookView, { title: 'My books Page', book: newBook }, { doctype: false });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.destroy({ where: { id, userId: req.session.userid } });
    res.json(result);
  } catch ({ message }) {
    res.json(message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, img } = req.body;
    if (title && author && img && req.session.userid) {
      const book = await Book.findOne({ where: { id, userId: req.session.userid } });
      book.title = title;
      book.author = author;
      book.img = img;
      book.save();
      res.json({ message: 'success' });
    } else {
      res.json({ message: 'We have some error here' });
    }
  } catch ({ message }) {
    res.json(message);
  }
});
module.exports = router;
