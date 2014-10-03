/** @jsx React.DOM */
var React = require('react');

var index = React.createClass({
	render: function() {
    return (
      <html>
      <head>
        <script src="bundle.js"></script>
      </head>
      <body>
        <div>
        	<input type="button" value="text"/>
        </div>
      </body>
      </html>
    );
  }
});

if (typeof window !== "undefined") {
  React.renderComponent(<index/>, document.documentElement);
} else {
  module.exports = index;
}