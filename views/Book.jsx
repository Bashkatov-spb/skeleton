const React = require('react');

module.exports = function Book({ book, likes = [], user, userId }) {
  const res = likes.filter((like) => like.bookId === book.id && like.userId === userId);
  console.log(res);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={book.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {book.title} {book.userId}
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <button data-id={book.id} type="button" className="btn btn-primary delete">
          delete
        </button>
        <a href={`/editform/${book.id}`} className="btn btn-primary update">
          update
        </a>

        <img className="like" src={res.length ? '/img/like.png' : '/img/dislike.png'} alt="like" />
      </div>
    </div>
  );
};
