

const express = require('express');
const app = express();

// app.use('/', (req, res, next) => {
//   console.log('always runs');
//   next();
// });

app.use('/', (req, res, next) => {
  console.log('inside middleware');
  res.send('<h1>inside middleware</h1>');
});

app.use('/users', (req, res, next) => {
  console.log('inside add middleware');
  res.send('<h1>inside  users middleware</h1>');
});


app.listen(3000);
