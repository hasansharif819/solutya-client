import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://sleepy-hamlet-35110.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [products])

    return (
        <div className='bg-base-300'>
            <div className='grid grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 p-5'>
            {
                products?.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;