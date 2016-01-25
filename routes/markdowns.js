'use strict';

var express = require('express');
var Markdown = require('../models/markdown');
var marked = require('marked');
var router = express.Router();

// markdown route 
router.post('/', function(req, res) {
  var markdowntext = req.body.markdowntext; 
  var convertedHTMLText = Markdown.convert(markdowntext);
  res.send(convertedHTMLText);
});

module.exports = router;