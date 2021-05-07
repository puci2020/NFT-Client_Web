import React, { useState } from 'react';
import propTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselStyled = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{
                maxHeight: '400px',
                height: '400px',
                width: '100vw',
                zIndex: '1',
            }}
        >
            {images.map((image) => (
                <Carousel.Item
                    key={image.id}
                    style={{ backgroundColor: '#3c3b3b' }}
                >
                    <img
                        className='d-block w-auto'
                        src={image.path}
                        alt='First slide'
                        style={{
                            maxHeight: '400px',
                            height: 'auto',
                            maxWidth: '100vw',
                            margin: 'auto',
                        }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

// CarouselStyled.propTypes = {
//     images: propTypes.Requireable<propTypes.InferProps<{
//         id: propTypes.Requireable<number>;
//         path: propTypes.Requireable<string>;
//     }>[]>
//     )
// };

CarouselStyled.propTypes = {
    images: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            path: propTypes.string,
        }),
    ).isRequired,
};

export default CarouselStyled;
