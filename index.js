const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const graphqlRoutes = require('./graphql/routes');

const app = express();

dotenv.config();

app.use(bodyParser.json());

app.use('/graphql', graphqlRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public/build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/build/index.html'));
  });
}

app.listen(8080, () =>
  global.console.log('Express app listening on localhost:8080'));
