import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {

    const categories = use(categoryPromise)
    // console.log(categories);

    return (
        <div>
            <h3 className='font-semibold text-xl'>All Category ({categories.length})</h3>
            <div className='grid grid-cols-1 gap-2 mt-5'>
                {
                    categories.map(category => <NavLink className="btn bg-base-100 border-0 hover:bg-base-200"
                         key={category.id}
                         to={`/category/${category.id}`}
                         >
                        {category.name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;