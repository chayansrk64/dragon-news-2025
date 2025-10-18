import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-2 '>
           <p className='bg-secondary px-3 py-2 text-white'>Latest</p>
          
            <Marquee pauseOnHover={true} speed={60} className='flex gap-5'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eveniet.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eveniet.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eveniet.</p>
            </Marquee>
            
           
        </div>
    );
};

export default LatestNews;