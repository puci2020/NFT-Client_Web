import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
    width: 100vw;
    height: 600px;
    position: relative;
    overflow: hidden;
    background-image: url('https://thumbs.dreamstime.com/b/golden-ripple-xrp-golden-cryptocurrency-coin-lying-dark-background-copy-space-panorama-banner-golden-ripple-xrp-golden-207977401.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
    background-attachment: fixed;
    font-size: ${({ theme }) => theme.font.size.s};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .shadow {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 10%);
    }
`;

const H2 = styled.h2`
    font-size: ${({ theme }) => theme.font.size.l};
    font-weight: ${({ theme }) => theme.font.weight.plusRegular};
    margin: 60px 120px;
    color: ${({ theme }) => theme.colors.menu.link};
    letter-spacing: ${({ theme }) => theme.font.space.s};
    text-align: center;

    ${({ theme }) => theme.media.tablet} {
        margin-top: 140px;
    }
    ${({ theme }) => theme.media.phone} {
        margin: 30px 20px;
    }
`;
const H3 = styled.h3`
    font-size: ${({ theme }) => theme.font.size.l};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin: 60px 120px;
    color: ${({ theme }) => theme.colors.menu.link};
    letter-spacing: ${({ theme }) => theme.font.space.s};
    text-align: center;

    ${({ theme }) => theme.media.tablet} {
        margin-top: 140px;
    }
    ${({ theme }) => theme.media.phone} {
        margin: 30px 20px;
    }
`;

const Buttons = styled.div`
    width: 100%;
    padding: 40px 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    ${({ theme }) => theme.media.phone} {
        flex-direction: column;
        &:first-child,
        &:last-child {
            margin: 10px 0;
        }
    }
`;

const About = () => {
    return (
        <Wrapper>
            <div className='shadow'>
                <H2>Pierwszy Polski rynek tokenów NFT</H2>
                <H3>
                    Twórz, handluj, kolekcjonuj unikatowe cyfrowe przedmioty
                </H3>
                <Buttons>
                    <Button
                        style={{ margin: '10px 0' }}
                        variant='contained'
                        color='primary'
                    >
                        Eksploruj
                    </Button>
                    <Button
                        style={{ margin: '10px 0' }}
                        variant='contained'
                        color='secondary'
                    >
                        Stwórz
                    </Button>
                    <Button
                        style={{ margin: '10px 0' }}
                        variant='contained'
                        color='primary'
                    >
                        Jak zacząć?
                    </Button>
                </Buttons>
            </div>
        </Wrapper>
    );
};

export default About;
