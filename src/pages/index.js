import React, { Component } from 'react';
import Link from 'gatsby-link';

import Logo from '../images/logo.png';
let ar = {
  heading: 'محمد يوسف، <span>مصمم</span> و<span>مطور</span> واجهات مواقع مستقل',
  note: 'هل لديك مشروع ممتع لي؟ :)',
  btnText: 'تواصل معي',
  socialLinksTitle: {
    twitter: 'قل مرحباً على Lwitter',
    linkedin: 'تواصل معي على Linkedin',
    // website: 'اقرأ مقالاتي في مدونتي',
    github: 'مشاريعي على Github',
    dribbble: 'أعمالي على Dribbble'
  }
}

let en = {
  heading: 'Mohamed Youssouf, freelance <span>Frontend developer</span> & <span>UI designer</span>',
  note: 'Do you have an interesting project for me? :)',
  btnText: 'Contact Me',
  socialLinksTitle: {
    twitter: 'Say hello on Twitter',
    linkedin: 'Connect with me on Linkedin',
    // website: 'Check my blog',
    github: 'Check my projects on Github',
    dribbble: 'Check my shots on Dribbble'
  }
}
// let language = en;
class IndexPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isEnglish: false,
      language: en,
      btnText: en.btnText
    };

    this.clickhandler = this.clickhandler.bind(this)
  }
  
  render() {
    return (
      <div>
        <img src={Logo} alt="" id="logo"/>
        <ul className="choose-lang">
          <li><button type="button" onClick={() => this.clickhandler(ar, 'rtl')}>عربي</button></li>
          <li><button type="button" onClick={() => this.clickhandler(en, 'ltr')}>English</button></li>
        </ul>
        <h1 id="heading" dangerouslySetInnerHTML={{ __html: this.state.language.heading }}></h1>
        <p id="note">{this.state.language.note}</p>
        <a href="mailto:example@email.com" className="btn btn-default" id="cta-contact" onClick={()=>this.setState({btnText: 'mohamedyoussoufali[at]@gmail.com'})}>{this.state.btnText}</a>
        <ul className="social-links">
          <li><a href="https://twitter.com/MedMYA" className="fa fa-twitter" title={this.state.language.socialLinksTitle.twitter} target='_blank'></a></li>
          <li><a href="https://www.linkedin.com/in/myoussf" className="fa fa-linkedin" title={this.state.language.socialLinksTitle.linkedin} target='_blank'></a></li>
          {/* <li><a href="https://www.bixelio.com" className="fa fa-globe" title={this.state.language.socialLinksTitle.website} target='_blank'></a></li> */}
          <li><a href="https://github.com/MohamedYoussouf" className="fa fa-github" title={this.state.language.socialLinksTitle.github} target='_blank'></a></li>
          <li><a href="https://dribbble.com/MohamedMYA" className="fa fa-dribbble" title={this.state.language.socialLinksTitle.dribbble} target='_blank'></a></li>
        </ul>
      </div>
    );
  }

  componentDidMount () {
    this.setState({
      btnText: this.state.language.btnText
    });
  }

  clickhandler(lang, dir) {
    this.props.passTo(dir)
    setTimeout(function() { 
      this.setState({language: lang}); 
      this.setState({btnText: this.state.language.btnText});
    }.bind(this), 200);
  }
}

export default IndexPage
