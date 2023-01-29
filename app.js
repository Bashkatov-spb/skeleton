/* eslint-disable import/no-extraneous-dependencies */
require('@babel/register');
const express = require('express');
const config = require('./config/config');

const app = express();

config(app);

const authRoute = require('./routes/auth.route');
const mainRoute = require('./routes/main.route');
const myBooksRoute = require('./routes/mybooks.route');
const myFavouritesBooksRoute = require('./routes/myfavourite.route');
const editFormRoute = require('./routes/editForm.route');

app.use('/', mainRoute);
app.use('/auth', authRoute);
app.use('/mybooks', myBooksRoute);
app.use('/myfavourites', myFavouritesBooksRoute);
app.use('/editform', editFormRoute);

app.listen(3000, () => {
  console.log('Server is started on 3000 port');
});
