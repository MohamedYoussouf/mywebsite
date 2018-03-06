import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
import './index.scss';
import Content from '../components/content';
// this.updateLayoutFunction = this.updateLayoutFunction.bind(this);




class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isPageTransition: 'container',
      direction: 'ltr',
    };
  }


  render() {
    const passTo = this.pageTrans.bind(this);
    return (
      <div className={this.state.isPageTransition} dir={this.state.direction}>
        <Helmet
          title="Mohamed Youssouf - Freelance Frontend Developer"
          meta={[
            { name: 'description', content: 'I am Mohamed Youssouf, freelance front-end developer & UI designer' },
            { name: 'keywords', content: 'freelancer, frontend developer, web developer, ui designer, web designer' },
            { name: 'google-site-verification', content: '03RM5DUW0ENe-9eoaex01B3zyH1CoGxhB84zplQr9dU' },
          ]}
        />
        <div className="spinner"></div>
        <div id="content">
          <div>
            {this.props.children({...this.props, passTo, direction: this.state.direction})}
          </div>
        </div>
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

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
