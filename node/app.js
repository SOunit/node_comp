const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error.js');
const db = require('./util/database');

const app = express();

// setup ejs view
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

db.execute('SELECT * FROM products')
  .then((results) => {
    console.log(results[0], results[1]);
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
