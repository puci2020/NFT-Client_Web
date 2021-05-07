import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import ProductService from '../NFT-List/NFTService';
import './NFT-Carousel.css';

const NFTCarousel = () => {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: '620px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product) => {
        return (
            <div className='product-item'>
                <div className='product-item-content'>
                    <div className='p-mb-3'>
                        <img
                            src={`showcase/demo/images/product/${product.image}`}
                            onError={(e) =>
                                (e.target.src =
                                    'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                            }
                            alt={product.name}
                            className='product-image'
                        />
                    </div>
                    <div>
                        <h4 className='p-mb-1'>{product.name}</h4>
                        <h6 className='p-mt-0 p-mb-3'>${product.price}</h6>
                        <span
                            className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}
                        >
                            {product.inventoryStatus}
                        </span>
                        <div className='car-buttons p-mt-5'>
                            <Button
                                icon='pi pi-search'
                                className='p-button p-button-rounded p-mr-2'
                            />
                            <Button
                                icon='pi pi-star'
                                className='p-button-success p-button-rounded p-mr-2'
                            />
                            <Button
                                icon='pi pi-cog'
                                className='p-button-help p-button-rounded'
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='carousel-demo'>
            <div className='card'>
                <Carousel
                    value={products}
                    numVisible={3}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    className='custom-carousel'
                    circular
                    autoplayInterval={3000}
                    itemTemplate={productTemplate}
                />
            </div>
        </div>
    );
};

export default NFTCarousel;
