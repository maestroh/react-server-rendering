/** @jsx React.DOM */
var React = require('react');

var index = React.createClass({
  handleClick: function(){
    alert("here i am");
  },
	render: function() {
    return (
      <html>
      <head>
        <script src="bundle.js"></script>
      </head>
      <body>
        <div>
        	<div onMouseDown={this.handleClick}>Here</div>
        </div>
      </body>
      </html>
    );
  }
});

if (typeof window !== "undefined") {
  React.renderComponent(<index/>, document);
} else {
  module.exports = index;
}