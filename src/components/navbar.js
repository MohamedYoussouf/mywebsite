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

        
        return (
            <nav className={`navbar`}>
                <div className="container-inner mx-auto px-4 flex justify-between items-center">
                    <Link to="/"><img src={Logo} className=" w-24" /></Link>
                    {!this.props.isMobile? (
                    <div className=" text-sm">
                        <Link className="mr-5 inline-block" to="services">خدماتي</Link>
                        <Link className="mr-5 inline-block" to="blog">المدونة</Link>
                        <Link className="mr-5 inline-block" to="blog">من أنا</Link>
                        <Link className="mr-5 inline-block px-5 py-2 bg-primary text-white rounded shadow-lg" to="blog">تواصل معي</Link>
                    </div>
                    ): (
                        <button onClick={this.props.click} className="text-xl px-2 py-2"><i className="fas fa-bars"></i></button>
                    )}
                </div>
            </nav>
        )
    }
}

export default Navbar;