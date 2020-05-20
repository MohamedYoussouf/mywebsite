import React from 'react';
import {Link} from 'gatsby';

const MobileMenu = (props) => {
    let classes = 'fixed top-0 left-0 right-0 bottom-0 z-10 bg-primary p-5 flex flex-col items-center justify-center invisible opacity-0 transition-all duration-500'
    if (props.isMenuOpen) {
        classes = 'fixed top-0 left-0 right-0 bottom-0 z-10 bg-primary p-5 flex flex-col items-center justify-center visible opacity-100 transition-all duration-500'
    } else {
        classes = 'fixed top-0 left-0 right-0 bottom-0 z-10 bg-primary p-5 flex flex-col items-center justify-center invisible opacity-0 transition-all duration-500'
    }
    console.log(props.isMenuOpen)
    return (
        <div 
            onClick={props.close}
            className={classes}>
            <button className="absolute top-0 right-0 p-5 text-white text-3xl"><i className="fas fa-times    "></i></button>
            <Link className="text-white py-5 text-2xl font-display font-bold" to="services">خدماتي</Link>
            <Link className="text-white py-5 text-2xl font-display font-bold" to="blog">المدونة</Link>
            <Link className="text-white py-5 text-2xl font-display font-bold" to="blog">من أنا</Link>
            <Link className="text-white py-5 text-2xl font-display font-bold" to="blog">تواصل معي</Link>
        </div>
    );
}

export default MobileMenu;