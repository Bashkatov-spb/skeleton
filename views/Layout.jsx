const React = require('react');
const Navigation = require('./Navigation');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/auth.js" />
        <script defer src="/scripts/delete.js" />
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/update.js" />
      </head>
      <body>
        <Navigation user={user} />
        {children}
      </body>
    </html>
  );
};
