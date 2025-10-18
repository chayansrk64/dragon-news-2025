import React, { use } from 'react';

const categoryPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {

    const categories = use(categoryPromise)
    // console.log(categories);

    return (
        <div>
            <h3 className='font-semibold text-2xl'>All Category ({categories.length})</h3>
        </div>
    );
};

export default Categories;