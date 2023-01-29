const React = require('react');
const Layout = require('./Layout');

module.exports = function MyFavouritesBooks({ title }) {
  return (
    <Layout title={title}>
      <h1>My favourites books page</h1>
    </Layout>
  );
};
