require('newrelic');
const express = require('express');
const app = express();
const compression = require('compression');
app.use(compression());
const path = require('path');
const cors = require('cors');

const port = 3000;

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());


app.use('/restaurants', express.static(path.join(__dirname, './public')));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use(express.static(path.join(__dirname, './public')));

app.get('/loaderio-be5347ebeea714e6cba3a81ca4624e10/', (req, res) => {
  res.send('loaderio-be5347ebeea714e6cba3a81ca4624e10');
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
