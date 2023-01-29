const React = require('react');
const Book = require('./Book');
const Layout = require('./Layout');

module.exports = function Main({ title, books = [], user, likes, userId }) {
  return (
    <Layout title={title} user={user}>
      <div className="container column">
        {books.map((book) => (
          <Book key={book.id} book={book} likes={likes} user={user} userId={userId} />
        ))}
      </div>
    </Layout>
  );
};
