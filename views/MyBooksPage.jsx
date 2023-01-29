const React = require('react');
const Book = require('./Book');
const Layout = require('./Layout');

module.exports = function MyBooks({ title, books = [], user, likes }) {
  // console.log(books);
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <form action="#" method="post" id="addForm" className="mb-3">
          <div className="mb-3">
            <label className="form-label">Book Title</label>
            <input name="title" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Book Author
            </label>
            <input name="author" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Book Img
            </label>
            <input name="img" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
            Description
            </label>
            <input name="description" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
      <div className="container column book__list">
        {books.map((book) => (
          <Book book={book} likes={likes} />
        ))}
      </div>
    </Layout>
  );
};
