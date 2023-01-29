const router = require('express').Router();
const { Book } = require('../db/models');
const EditForm = require('../views/EditForm');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ where: { id, userId: req.session.userid } });
    res.renderComponent(EditForm, { title: 'Edit Form', book });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
