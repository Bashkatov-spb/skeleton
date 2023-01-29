const React = require('react');

module.exports = function Navigation({ title, user }) {
  return (
    <div className="nav__container">
      <ul className="nav__list">
        {user && (
        <li className="nav__item">
          Hello,
          {' '}
          {user.name}
        </li>
        )}
        <li className="nav__item">
          <a href="/">Main</a>
        </li>
        {user && (
          <>
            <li className="nav__item">
              <a href="/mybooks">MyBooks</a>
            </li>
            <li className="nav__item">
              <a href="/myfavourites">MyFavourites</a>
            </li>

            <li className="nav__item">
              <a href="/auth/logout">LogOut</a>
            </li>
          </>
        )}
        {!user && (
          <>
            <li className="nav__item">
              <a href="/auth/signin">SignIn</a>
            </li>
            <li className="nav__item">
              <a href="/auth/signup">SignUp</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
