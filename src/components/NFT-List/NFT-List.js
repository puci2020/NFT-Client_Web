import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './NFT-List.css';

import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import ProductService from './NFTService';
import { Rating } from 'primereact/rating';

import { StyledLink } from '../../shared/Link';

const NFTList = () => {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' },
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        } else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };

    const renderListItem = (data) => {
        return (
            <div className='p-col-12'>
                <div className='product-list-item'>
                    <img
                        src={`showcase/demo/images/product/${data.image}`}
                        onError={(e) =>
                            (e.target.src =
                                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                        }
                        alt={data.name}
                    />
                    <div className='product-list-detail'>
                        <div className='product-name'>{data.name}</div>
                        <div className='product-description'>
                            {data.description}
                        </div>
                        <Rating value={data.rating} readOnly cancel={false} />
                        <i className='pi pi-tag product-category-icon' />
                        <span className='product-category'>
                            {data.category}
                        </span>
                    </div>
                    <div className='product-list-action'>
                        <span className='product-price'>${data.price}</span>
                        <Button
                            icon='pi pi-shopping-cart'
                            label='Add to Cart'
                            disabled={data.inventoryStatus === 'OUTOFSTOCK'}
                        />
                        <span
                            className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}
                        >
                            {data.inventoryStatus}
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    const renderGridItem = (data) => {
        return (
            <div className='p-col-12 p-sm-6 p-md-4 p-lg-3'>
                <StyledLink to={'/nft/' + data.id}>
                    <div className='product-grid-item card'>
                        <div className='product-grid-item-top'>
                            <div>
                                <i className='pi pi-tag product-category-icon' />
                                <span className='product-category'>
                                    {data.category}
                                </span>
                            </div>
                            {/* <span
                                className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}
                            >
                                {data.inventoryStatus}
                            </span> */}
                        </div>
                        <div className='product-grid-item-content'>
                            <img
                                src={`showcase/demo/images/product/${data.image}`}
                                onError={(e) =>
                                    (e.target.src =
                                        'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                                }
                                alt={data.name}
                            />
                            <div className='product-name'>{data.name}</div>
                            <div className='product-description'>
                                {data.description}
                            </div>
                            <Rating
                                value={data.rating}
                                readOnly
                                cancel={false}
                            />
                        </div>
                        <div className='product-grid-item-bottom'>
                            <span className='product-price'>${data.price}</span>
                            <Button
                                icon='pi pi-shopping-cart'
                                label='To Cart'
                                disabled={data.inventoryStatus === 'OUTOFSTOCK'}
                            />
                        </div>
                    </div>
                </StyledLink>
            </div>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return renderListItem(product);
        else if (layout === 'grid') return renderGridItem(product);
    };

    const renderHeader = () => {
        return (
            <div className='p-grid p-nogutter'>
                <div className='p-col-6' style={{ textAlign: 'left' }}>
                    <Dropdown
                        options={sortOptions}
                        value={sortKey}
                        optionLabel='label'
                        placeholder='Sort By Price'
                        onChange={onSortChange}
                    />
                </div>
                <div className='p-col-6' style={{ textAlign: 'right' }}>
                    <DataViewLayoutOptions
                        layout={layout}
                        onChange={(e) => setLayout(e.value)}
                    />
                </div>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className='dataview-demo'>
            <div className='card'>
                <DataView
                    value={products}
                    layout={layout}
                    header={header}
                    itemTemplate={itemTemplate}
                    paginator
                    rows={8}
                    sortOrder={sortOrder}
                    sortField={sortField}
                />
            </div>
        </div>
    );
};

export default NFTList;
