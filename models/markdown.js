var Markdown = {};
var marked = require('marked');

Markdown.convert = function(markdowntext){
var convertedHTMLText = marked(markdowntext);
return convertedHTMLText; 
}

module.exports = Markdown;
