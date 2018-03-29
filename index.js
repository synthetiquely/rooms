const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const graphqlRoutes = require('./graphql/routes');

const app = express();

const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(path.join(__dirname, 'public/build')));
}

app.use(bodyParser.json());

app.use('/graphql', graphqlRoutes);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/build/index.html'));
});

app.listen(3000, () => global.console.log('Express app listening on localhost:3000'));
