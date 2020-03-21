import React from 'react';
import Link from 'gatsby-link';
import SocialLink from './socialLink'

const Footer = () => {
    return (
        <footer className=" py-20 text-center bg-gray-900 text-white">
            <div className="container-inner mx-auto">
                <div className="mb-5">
                    <Link className="px-2 text-gray-200" to="/">Link</Link>
                    <Link className="px-2 text-gray-200" to="/">Link</Link>
                    <Link className="px-2 text-gray-200" to="/">Link</Link>
                </div>
                <div className="mb-12">
                    <SocialLink name="twitter" url="https://twitter.com/MedMYA"/>
                    <SocialLink name="dribbble" url="https://dribbble.com/MohamedMYA"/>
                    <SocialLink name="github" url="https://github.com/MohamedYoussouf"/>
                    <SocialLink name="linkedin" url="https://www.linkedin.com/in/myoussf"/>
                </div>
                <p className="text-sm mb-0 text-gray-600">جميع الحقوق محفوظة 2020</p>
            </div>
        </footer>
    );
}

export default Footer;