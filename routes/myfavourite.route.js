const router = require('express').Router();
const MyFavouritesPage = require('../views/MyFavouritesPage');

router.get('/', (req, res) => {
  res.renderComponent(MyFavouritesPage, { title: 'MyFavouritesPage' });
});

module.exports = router;
