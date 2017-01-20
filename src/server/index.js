const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express();
      mongoose = require('mongoose'),
      config = require('./config/main'),
      router = require('./router');

// Database Setup


const port = 3000;
const database = 'mongodb://localhost/test';

mongoose.connect(database);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
router(app);

app.listen(port);
console.log('Your server is running on port ' + port + '.');
