const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const profileRoutes = require('./routes/profile');



const app = express();

app.use(bodyParser.json()); // application/json
app.use('/', profileRoutes);

const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://DeepaAkhil:DeepaAkhil@cluster0.rhr7t.mongodb.net/TestOnboarding?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true } )
  .then(result => {
    app.listen(port);
  })
  .catch(err => console.log(err));


