import React from 'react';

const ShareButtons = (props) => {
    const url = 'http://www.example.com';
    return (
        <div className="text-center">
            <h3 className="mb-8 text-lg md:text-xl">أعجبك ما قرأت؟ شارك مع الأخرين</h3>
            <div className="flex flex-col justify-center md:flex-row md:space-x-2 md:space-x-reverse">
                <a href={`https://www.facebook.com/sharer.php?u=${url}${props.url}`} className="w-full block mb-5 md:w-48 py-4 md:py-2 bg-gray-900 text-white text-sm font-display font-bold rounded bg-facebook hover:no-underline focus:no-underline"><i className="fab fa-facebook-f"/> شارك على فيسبوك</a>
                <a href={`https://twitter.com/intent/tweet?url=${url}&text=${props.title}&via=medmya`} className="w-full block mb-5 md:w-48 py-4 md:py-2 bg-gray-900 text-white text-sm font-display font-bold rounded bg-twitter hover:no-underline focus:no-underline"><i className="fab fa-twitter"/> شارك على تويتر</a>
            </div>
        </div>
    )
}

export default ShareButtons;