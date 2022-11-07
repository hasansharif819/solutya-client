import React, { useEffect, useState } from 'react';
import useProduct from '../../../hooks/useProduct';
import Manage from './Manage';

const Manages = () => {
    const [products] = useProduct([]);
    // console.log('products', products)
    
    return (
            <div className='bg-base-300'>
            <div className='grid grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 p-5'>
            {
                products?.map(product => <Manage
                    key={product._id}
                    product={product}
                ></Manage>)
            }
            </div>
        </div>
    );
};

export default Manages;