// Product.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import data_product from '../assets/data';
import { ProductDisplay } from '../ProductDisplay'; 

const Product = () => {
    const { data_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = data_product.find((e) => e.ProizvodId === Number(productId)); 

    return (
        <div>
            <ProductDisplay product={product} />
        </div>
    );
};

export default Product;
