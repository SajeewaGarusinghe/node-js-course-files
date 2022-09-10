const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));//parse form inputs 

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><li for="message">add product</li><input type="text" name="message"><button type="submit">submit</button></form>'
  );
});

app.post('/product', (req, res, next) => {
  
  console.log(req.body);
  res.redirect('/');
});
app.use('/', (req, res, next) => {
  console.log('inside middleware');
  res.send('<h1>Hallow from express</h1>');
});

app.listen(3000);
