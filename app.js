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
  const server = app.listen(port);
    const io = require("./socket").init(server, {
       cors: {
          origin: "http://localhost:3000",
          methods: ["GET", "POST"],
       },
    });
    io.on("connection", (socket) => {
       console.log("client connected");
    });
})
.catch(err => console.log(err));


