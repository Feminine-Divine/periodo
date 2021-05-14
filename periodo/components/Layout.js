import React, { Component } from "react";
import Header from "./navbar";
import Footer from "./Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
