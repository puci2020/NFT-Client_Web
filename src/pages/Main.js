import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import NFTCarousel from '../components/NFT-Carousel/NFT-Carousel';
import NFTList from '../components/NFT-List/NFT-List';
import CarouselStyled from '../shared/CarouselStyled';

const Wrapper = styled.div`
    height: auto;
    min-height: 100vh;
    /* padding: 60px 120px;

    ${({ theme }) => theme.media.phone} {
        padding: 60px 20px;
    }
    ${({ theme }) => theme.media.bigTablet} {
        padding: 60px 20px;
    } */
`;

const Content = styled.div`
    padding: 60px 120px;

    ${({ theme }) => theme.media.phone} {
        padding: 60px 20px;
    }
    ${({ theme }) => theme.media.bigTablet} {
        padding: 60px 20px;
    }
`;

const Main = () => (
    <Wrapper>
        {/* <CarouselStyled
            images={[
                {
                    id: 1,
                    path:
                        'https://d33wubrfki0l68.cloudfront.net/d0c191007cb249049b9a06c970cf19829fd9af38/ced0d/static/28214bb68eb5445dcb063a72535bc90c/3bf79/hero.png',
                },
                {
                    id: 2,
                    path:
                        'https://upload.wikimedia.org/wikipedia/commons/9/91/Panorama_eth-hxe.jpg',
                },
            ]}
        /> */}
        <About />
        <NFTCarousel />
        <Content>
            <NFTList />
        </Content>
    </Wrapper>
);

export default Main;
