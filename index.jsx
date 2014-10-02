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
        	hello
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


  
//        <input type="button" value="temp" onClick={this.handleClick} />

// handleClick: function(){
// 		alert("hello");
//   },