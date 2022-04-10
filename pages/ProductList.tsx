import React from 'react';
import ProductCard from '@components/ProductCard';

const ProductList = () => {

    
    
        return <>
        <div className="columns is-centered">
        <div className="column">
            <ProductCard/>
        </div>
        <div className="column ">
            <ProductCard />
        </div>
        <div className="column ">
            <ProductCard />
        </div>
        <div className="column ">
            <ProductCard />
        </div>
        
        </div>
        <div className="columns is-centered">
        <div className="column">
            <ProductCard />
        </div>
        <div className="column ">
            <ProductCard />
        </div>
        <div className="column ">
            <ProductCard />
        </div>
        <div className="column ">
            <ProductCard />
        </div>
        
        </div>
    
    <div className="columns is-centered">
        <nav className="pagination" role="navigation" aria-label="pagination">
    <a className="pagination-previous">Previous</a>
    </nav>
    </div>
    
        </>
}

export default ProductList;