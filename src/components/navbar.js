import React from 'react';
import Link from 'gatsby-link';

function Navbar() {
    return (
        <nav className=" py-5 bg-gray-200 mb-6">
            <div className="container mx-auto flex justify-between">
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