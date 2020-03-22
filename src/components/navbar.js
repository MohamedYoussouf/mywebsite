import React, {Component} from 'react';
import Link from 'gatsby-link';

function _handleScroll(e) {
    console.log('scrolling')
  }

class Navbar extends Component {
    state = {
        isScrolled: false,
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
            <nav className={this.state.isScrolled? 'transition-all duration-300 py-4 mb-6 font-display font-bold bg-white top-0 fixed left-0 right-0 z-10 shadow-md':'transition-all duration-300 py-6 mb-6 font-display font-bold bg-white fixed top-0 left-0 right-0 z-10'}>
                <div className="container-inner mx-auto px-4 flex justify-between">
                    <Link to="/">Mohamed Youssouf</Link>
                    <div className=" text-sm">
                        <Link className="mr-5" to="blog">المدونة</Link>
                        <Link className="mr-5" to="blog">من أنا</Link>
                        <Link className="mr-5 px-5 py-2 bg-purple text-white rounded shadow-lg" to="blog">تواصل معي</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;