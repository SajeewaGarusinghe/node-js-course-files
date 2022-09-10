const http = require('http');

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('inside middleware');
  next(); //this allows the request to continue to the next middleware in, whoops middleware in line which is the middleware
});
app.use((req, res, next) => {
  console.log('another middleware');
  res.send('<h1>second middleware</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
