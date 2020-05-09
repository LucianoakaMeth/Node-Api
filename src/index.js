const express = require('express');
const { countries, languages } = require('countries-list');
const { info } = require('./modules/my-log');
const app = express();

app.get('/', (req, res) => {
  res.send('Helou');
});
app.get('/info', (req, res) => {
  info('Hola info');
  res.send('info');
});
app.get('/country', (req, res) => {
  console.log('req.query', req.query);
  res.json(countries[req.query.code]);
});
app.get('/languages/:lang', (req, res) => {
  console.log('req.params', req.params);
  const lang = languages[req.params.lang];
  if (lang) {
    res.json({
      status: 'OK',
      data: lang,
    });
  } else {
    res.status(404).json({
      status: 'NOT FOUND',
      message: 'language ' + req.params.lang + ' NOT FOUND',
    });
  }
});
app.get('*', (req, res) => {
  res.status(404).send('NOT FOUND');
});
app.listen(4000, () => {
  console.log('Running on port 4000');
});
