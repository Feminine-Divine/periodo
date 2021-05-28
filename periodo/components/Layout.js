import Header from './navbar'
import Footer from './Footer/Footer'
import React, {Component} from 'react'
import ContactUs from './Footer/ContactUs';


<<<<<<< HEAD
=======

>>>>>>> origin

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
                
            </div>
        )
    }
}

export default Layout;