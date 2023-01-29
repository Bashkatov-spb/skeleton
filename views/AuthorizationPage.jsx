const React = require('react');
const Layout = require('./Layout');

module.exports = function SignIn({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>Sign In Page</h1>
        <form action="#" method="post" id="sign_in">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name Please
            </label>
            <input name="name" type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input name="password" type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="mb-3">
            <p className="error" />
          </div>
        </form>
      </div>
    </Layout>
  );
};
