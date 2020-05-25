import React from 'react';

function SocialLink({name, url}) {
    return (
        <a className="text-gray-600 text-2xl mr-5 hover:text-primary" 
            href={url}>
            <i className={`fab fa-${name}`} />
        </a>
    )
}

export default SocialLink;