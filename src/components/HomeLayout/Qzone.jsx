import React from 'react';
import swimming from '../../assets/swimming.png'
import classes from '../../assets/class.png'
import play from '../../assets/playground.png'


const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h3 className='text-xl font-semibold'>Qzone</h3>
            <div className="space-y-5 ">
                <img className='mx-auto' src={swimming} alt="" />
                <img className='mx-auto' src={classes} alt="" />
                <img className='mx-auto' src={play} alt="" />
            </div>
        </div>
    );
};

export default Qzone;