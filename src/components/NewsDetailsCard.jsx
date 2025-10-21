import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    return (
        <div>
            <img className='w-full h-[460px] object-cover my-3' src={news.image_url} alt="" />
            <h3 className='text-xl font-semibold my-5'>{news.title}</h3>
            <p>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='bg-secondary text-white px-3 py-2 mt-3 inline-block'>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;