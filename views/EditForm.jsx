const React = require('react');

const Layout = require('./Layout');

module.exports = function EditForm({ title, user, book }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <h1>Edit book page</h1>
        <form action={`/mybooks/${book.id}`} method="post" id="editForm" className="mb-3">
          <div className="mb-3">
            <label className="form-label">Book Title</label>
            <input name="title" type="text" className="form-control" defaultValue={book.title} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Book Author
            </label>
            <input
              name="author"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              defaultValue={book.author}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Book Img
            </label>
            <input
              name="img"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              defaultValue={book.img}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <div className="mb-3">
            <p className="error" />
          </div>
        </form>
      </div>
    </Layout>
  );
};
