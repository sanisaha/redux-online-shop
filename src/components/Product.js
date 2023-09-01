import React from 'react';

const Product = ({product}) => {
    const {image, title} = product;
    return (
        <section className='Detail'>
            <article className='Detail_thumbnail'>
                <img src={image} alt={title}></img>
            </article>
        </section>
    );
};

export default Product;