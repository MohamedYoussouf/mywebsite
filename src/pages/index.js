import React, { Component } from 'react';
import Link from 'gatsby-link';

import Logo from '../images/logo.png';
let ar = {
  heading: 'محمد يوسف، <span>مصمم</span> و<span>مطور</span> واجهات مواقع مستقل',
  note: 'هل لديك مشروع ممتع لي؟ :)',
  btnText: 'تواصل معي',
  socialLinksTitle: {
    twitter: 'قل مرحباً على twitter',
    linkedin: 'تواصل معي على linkedin',
    website: 'اقرأ مقالاتي في مدونتي',
  }
}

let en = {
  heading: 'Mohamed Youssouf, freelance <span>Frontend developer</span> & <span>UI designer</span>',
  note: 'Do you have an interesting project for me? :)',
  btnText: 'Contact Me',
  socialLinksTitle: {
    twitter: 'Say hello on twitter',
    linkedin: 'Connect with me on linkedin',
    website: 'Check my blog',
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
        <ul className="choose-lang">
          <li><button type="button" onClick={() => this.clickhandler(ar, 'rtl')}>عربي</button></li>
          <li><button type="button" onClick={() => this.clickhandler(en, 'ltr')}>English</button></li>
        </ul>
        <img src={Logo} alt="" id="logo"/>
        <h1 id="heading" dangerouslySetInnerHTML={{ __html: this.state.language.heading }}></h1>
        <p id="note">{this.state.language.note}</p>
        <a href="mailto:example@email.com" className="btn btn-default" id="cta-contact" onClick={()=>this.setState({btnText: 'mohamedyoussouf1994@gmail.com'})}>{this.state.btnText}</a>
        <ul className="social-links">
          <li><a href="#" className="fa fa-twitter" title={this.state.language.socialLinksTitle.twitter}></a></li>
          <li><a href="#" className="fa fa-linkedin" title={this.state.language.socialLinksTitle.linkedin}></a></li>
          <li><a href="#" className="fa fa-globe" title={this.state.language.socialLinksTitle.website}></a></li>
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


// const IndexPage = (props) => (
  
//     <div>
//     <img src={Logo} alt="" id="logo"/>
//     <h1 id="heading">محمد يوسف، <span>مصمم</span> و<span>مطور</span> واجهات مواقع مستقل</h1>
//     <p id="note">
//       هل لديك مشروع ممتع لي؟ :)
//     </p>
//     <a href="#" className="btn btn-default" id="cta-contact">تواصل معي</a>
// {console.log(props)}
//     <ul className="social-links">
//       <li><a href="#" className="fa fa-twitter" title="قل مرحباً على twitter"></a></li>
//       <li><a href="#" className="fa fa-linkedin" title="تواصل معي على linkedin"></a></li>
//       <li><a href="#" className="fa fa-globe" title="اقرأ مقالاتي في مدونتي"></a></li>
//     </ul>
//   </div>
// )

export default IndexPage
