const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const starships = require('./routes/api/starships');
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongodb
mongoose
.connect(db, {useNewUrlParser: true})
.then(()=> console.log('Mongodb Connected'))
.catch(err => console.log(err));
const port = process.env.PORT || 5000;

// Use routes
app.use('/api/starships', starships);

// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

app.listen(port,()=> console.log(`Server started on port${port}`));
