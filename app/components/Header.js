var React = require('react');

var headerStyle = {
  padding: "10px 0px",
  textAlign: "center",
  fontSize: "12px"
}

var Header = React.createClass({
  render: function () {
    return (
      <div className="row" style={headerStyle}>
        <p>Produzido durante o <a href="http://jscasts.teachable.com/p/comecando-com-react-js">curso de React</a> e estilizado com <a href="http://materializecss.com/">MaterializeCSS</a></p>
      </div>
    )
  }
})

module.exports = Header;
