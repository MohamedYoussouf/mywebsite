import React, {Component} from 'react';
import {Link} from 'gatsby';

import Logo from "../images/the_logo.png"

function _handleScroll(e) {
    console.log('scrolling')
  }

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isScrolled: false,
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll=(e)=> {
        if (window.scrollY > 20) {
            this.setState({isScrolled:true})
        } else {
            this.setState({isScrolled:false})
        }
      }
    render(){
        let homeClass = this.props.isHome?'home':'';
        let btnClass = 'mr-5 px-5 py-2 bg-primary text-white rounded shadow-lg';

        if (this.props.isHome) {
            homeClass = 'home';
            btnClass = 'mr-5 px-5 py-2 bg-white text-primary rounded shadow-lg  !important'
        } else {
            homeClass = '';
            btnClass = 'mr-5 px-5 py-2 bg-primary text-white rounded shadow-lg'
            
        }
        
        return (
            <nav className={`navbar`}>
                <div className="container-inner mx-auto px-4 flex justify-between items-center">
                    <Link to="/"><img src={Logo} className=" w-24" /></Link>
                    <div className=" text-sm">
                        <Link className="mr-5" to="services">خدماتي</Link>
                        <Link className="mr-5" to="blog">المدونة</Link>
                        <Link className="mr-5" to="blog">من أنا</Link>
                        <Link className={btnClass} to="blog">تواصل معي</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;