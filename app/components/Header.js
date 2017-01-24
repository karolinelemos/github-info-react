import React from 'react';

const headerStyle = {
  padding: "10px 0px",
  textAlign: "center",
  fontSize: "12px"
}

class Header extends React.Component{
  render() {
    return (
      <div className="row" style={headerStyle}>
        <p>Produzido durante o <a href="http://jscasts.teachable.com/p/comecando-com-react-js">curso de React</a> e estilizado com <a href="http://materializecss.com/">MaterializeCSS</a></p>
      </div>
    )
  }
};

export default Header;
