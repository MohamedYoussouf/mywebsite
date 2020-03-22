import React from 'react';

const ShareButtons = (props) => {
    const url = 'http://www.example.com';
    return (
        <div className="text-center">
            <h3 className="mb-8">أعجبك ما قرأت؟ شارك مع الأخرين</h3>
            <div>
            <a href={`https://www.facebook.com/sharer.php?u=${url}${props.url}`} className="inline-block w-48 py-2 bg-gray-900 text-white text-sm font-display font-bold rounded bg-facebook mx-3 hover:no-underline focus:no-underline"><i className="fab fa-facebook-f"/> شارك على فيسبوك</a>
            <a href={`https://twitter.com/intent/tweet?url=${url}&text=${props.title}&via=medmya`} className="inline-block w-48 py-2 bg-gray-900 text-white text-sm font-display font-bold rounded bg-twitter mx-3 hover:no-underline focus:no-underline"><i className="fab fa-twitter"/> شارك على تويتر</a>
            </div>
        </div>
    )
}

export default ShareButtons;