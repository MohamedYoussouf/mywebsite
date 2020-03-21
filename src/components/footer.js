import React from 'react';
import Link from 'gatsby-link';

const Footer = () => {
    return (
        <footer className="py-5 text-center bg-gray-200">
            <div className="container-inner mx-auto">
                <div className="mb-5">
                    <Link className="px-2" to="/">Link</Link>
                    <Link className="px-2" to="/">Link</Link>
                    <Link className="px-2" to="/">Link</Link>
                </div>
                <div className="mb-5">
                    <Link className="mx-3 text-2xl" to="/"><i className="fab fa-twitter" /></Link>
                    <Link className="mx-3 text-2xl" to="/"><i className="fab fa-linkedin" /></Link>
                    <Link className="mx-3 text-2xl" to="/"><i className="fab fa-dribbble" /></Link>
                    <Link className="mx-3 text-2xl" to="/"><i className="fab fa-github" /></Link>
                </div>
                <p className="text-base">جميع الحقوق محفوظة 2020</p>
            </div>
        </footer>
    );
}

export default Footer;