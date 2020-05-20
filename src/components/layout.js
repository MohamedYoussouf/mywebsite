import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// import './index.scss';

import Navbar from './navbar'
import Footer from './footer'
import MobileMenu from './mobileMenu'





class Layout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isMobile: false,
      openMobileMenu:false
    };
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleScreenWidth)
    this.handleScreenWidth()
  }

  handleScreenWidth = () => {
    if (window.innerWidth <= 400) {
      this.setState({isMobile: true})
    } else {
      this.setState({isMobile: false})
    }
  }

  toggleMenu = () => {
    this.setState({openMobileMenu:!this.state.openMobileMenu})
    console.log(this.state.openMobileMenu)
  }

  render() {
    return (
      <div dir="rtl"  className="bg-gray-100">
        <Helmet
          title="Mohamed Youssouf - Freelance Frontend Developer"
          meta={[
            { name: 'description', content: 'I am Mohamed Youssouf, freelance front-end developer & UI designer' },
            { name: 'keywords', content: 'freelancer, frontend developer, web developer, ui designer, web designer' },
            { name: 'google-site-verification', content: '03RM5DUW0ENe-9eoaex01B3zyH1CoGxhB84zplQr9dU' },
          ]}
        />
        <Navbar isMobile={this.state.isMobile} click={()=>this.toggleMenu()}/>
        <div id="content">
          <div>
            {this.props.children}
          </div>
        </div>
        <Footer/>
        <MobileMenu isMenuOpen={this.state.openMobileMenu} close={()=>this.toggleMenu()}/>
      </div>
    );
  }
};

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
