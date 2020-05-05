import React from 'react';

function ServiceCard () {
    return (
        <div className="flex px-3 mb-10 md:mb-0 last:mb-0">
            <div className="flex w-16 h-16 justify-center items-center flex-shrink-0 bg-primary text-white rounded-md shadow-xl">
                <i className="fas fa-desktop text-xl"></i>
            </div>
            <div className="mr-5">
                <h4>تطوير المواقع</h4>
                <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
            </div>
        </div>
    )
}

export default ServiceCard;