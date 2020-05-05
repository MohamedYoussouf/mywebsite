import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// import './index.scss';

import Navbar from './navbar'
import Footer from './footer'





class Layout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
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
        <Navbar/>
        <div id="content">
          <div>
            {this.props.children}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

  pageTrans (dir) {
    
      this.setState({isPageTransition: 'container is-transition'});
      // this.setState({isPageTransition: 'container'});
      

      setTimeout(function() { 
        
        if (dir) {

          this.setState({direction: dir});
        }
      }.bind(this), 500);

      setTimeout(function() { 
        
        this.setState({isPageTransition: 'container'}); 
      }.bind(this), 1000);

    // } 
    // else {
    //   this.setState({isPageTransition: 'container'})
    // }
    
  }
};

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
