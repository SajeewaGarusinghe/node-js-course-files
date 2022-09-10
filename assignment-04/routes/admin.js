const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// /admin/add-user => GET
router.get('/add-user', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add user',
    path: '/admin/add-user',

  });
});

// /admin/add-user => POST
router.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.userName });
  res.redirect('/');
});

exports.routes = router;
exports.users = users;
