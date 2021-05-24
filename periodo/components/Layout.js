import Header from './navbar'
import Footer from './Footer/Footer'
import React, {Component} from 'react'
import ContactUs from './Footer/ContactUs';



class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <ContactUs />
                <Footer />
                
            </div>
        )
    }
}

export default Layout;