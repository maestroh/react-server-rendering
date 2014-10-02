require('node-jsx').install();
var express = require('express'),
    app     = express(),
		React = require('react'),
		index = require('./index.jsx');

var render = function(req, res){
  var component = new index();
  var str = React.renderComponentToString(component);
  res.set('Content-Type', 'text/html');
  res.send(str);
  res.end();
}

app.get('/',render);
app.use(express.static(__dirname));

app.listen(8080);

