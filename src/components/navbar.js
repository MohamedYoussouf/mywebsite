import React from 'react';
import Link from 'gatsby-link';

function Navbar() {
    return (
        <nav className=" py-5 mb-6">
            <div className="container-inner mx-auto px-4 flex justify-between">
                <Link to="/">Mohamed Youssouf</Link>
                <div>
                    <Link className="px-5" to="blog">blog</Link>
                    <Link className="px-5" to="blog">blog</Link>
                    <Link className="px-5" to="blog">blog</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;