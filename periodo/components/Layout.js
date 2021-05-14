<<<<<<< HEAD
import React, { Component } from "react";
import Header from "./navbar";
import Footer from "./Footer/Footer";
=======
import Header from "./navbar";
import Footer from "./Footer/Footer";
import React, { Component } from "react";
>>>>>>> 6c2a4d299865ea74ad9c606f8957b6f36d3ba0ca

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
