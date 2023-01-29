const React = require('react');

module.exports = function Book({
  book, likes = [], user, userId,
}) {
  const res = likes.filter((like) => like.bookId === book.id && like.userId === userId);
  const numberLikes = likes.filter((like) => like.bookId === book.id);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={book.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {book.title}
          {' '}
          {book.author}
        </h5>
        <p className="card-text">
          {book.description}
        </p>
        { user && (user.id === book.userId)
     && (
     <>
       <button data-id={book.id} type="button" className="btn btn-primary delete">
         delete
       </button>
       <a href={`/editform/${book.id}`} className="btn btn-primary update">
         update
       </a>

     </>
     )}
        <div className="likes">
          {numberLikes.length > 0 && <h1>{numberLikes.length}</h1>}
          <img className="like" src={res.length ? '/img/like.png' : '/img/dislike.png'} alt="like" />
        </div>
      </div>
    </div>
  );
};
