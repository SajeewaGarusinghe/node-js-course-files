const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.users);
  const users = adminData.users;
  res.render('users', {
    users: users,
    path: '/',
    pageTitle: 'users list'
    
  });
});

module.exports = router;
