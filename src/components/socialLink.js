import React from 'react';

function SocialLink({name, url}) {
    return (
        <a className="mx-3 w-12 h-12 rounded-full inline-flex items-center justify-center bg-gray-800 text-white text-base hover:bg-primary" 
            href={url}>
            <i className={`fab fa-${name}`} />
        </a>
    )
}

export default SocialLink;