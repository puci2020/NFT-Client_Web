import React from 'react';
import styled from 'styled-components';
// import {useParams} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import { SiEthereum } from 'react-icons/si';
import AccordionItem from '../shared/AccordionItem';
import TableSales from '../shared/TableSales';

const Wrapper = styled.div`
    height: auto;
    min-height: 100vh;
    padding: 60px 120px;
    display: grid;
    grid-template-columns: 2fr 3fr;

    ${({ theme }) => theme.media.phone} {
        padding: 60px 20px;
    }

    ${({ theme }) => theme.media.bigTablet} {
        padding: 60px 20px;
        grid-template-columns: 1fr;
    }
`;

const Left = styled.div`
    padding: 0 20px;
`;

const Right = styled.div`
    padding: 0 20px;

    h2,
    h4 {
        margin-bottom: 20px;
    }
`;

const Owner = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    span {
        margin-left: 10px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 20px;
`;

const Price = styled.div`
    margin-bottom: 20px;

    .price {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        svg {
            width: 30px;
            height: 30px;
        }

        h2 {
            margin: 0;
        }

        p {
            margin-left: 10px;
        }
    }
`;

const NFTDetails = () => {
    // const {id} = useParams();

    const saleHistory = [
        {
            event: 'Sprzedaż',
            price: 12,
            owner: 'Jan',
            buyer: 'Piotr',
            date: '12-04-2021 12:21',
        },
        {
            event: 'Oferta',
            price: 1,
            owner: 'Jan',
            buyer: 'Ewa',
            date: '12-04-2021 10:20',
        },
    ];

    const priceHistory = [
        {
            price: 12,
            date: '12-04-2021 12:22',
        },
        {
            price: 1,
            date: '12-04-2021 10:22',
        },
        {
            price: 0.65,
            date: '10-03-2021 10:12',
        },
    ];

    return (
        <Wrapper>
            <Left>
                <Image src='https://lh3.googleusercontent.com/jpd3H4E7sAuKIj5wMRF3Pu-bgC3DvQF8ogZPjHGyCjWapCSpAe34pb2Zes5OiwWWY3o6JH5NGHGUiJrcJp31K15xWeqw4EKEYC94pmU=s0' />
                <AccordionItem
                    title="Szczegóły"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti deserunt dolorem dolorum, enim, fugiat id iusto nulla odit perferendis quos rem repellat sapiente sint ut vel voluptas. Debitis, repellat?"
                />
                <AccordionItem
                    title="Item info"
                    content={(
                        <>
                            <p>Blockchain: Etherium</p>
                            <p>Hash: 0x324j234kj</p>
                        </>
                    )}
                />
            </Left>
            <Right>
                <h4>Kategoria</h4>
                <h2>Super obrazek</h2>
                <Owner>
                    <Avatar
                        alt='Remy
                            Sharp'
                        src='/static/images/avatar/1.jpg'
                    />
                    <span>Jan Kowalski</span>
                    <span>0 wyświetleń</span>
                </Owner>
                <Price>
                    <div className='price'>
                        <SiEthereum />
                        <h2>12</h2>
                        <p>(1000 USD)</p>
                    </div>
                    <Button variant='contained' color='primary'>
                        Kup teraz
                    </Button>
                </Price>
                <AccordionItem
                    title="Historia sprzedaży"
                    content={<TableSales saleHistory rowsArray={saleHistory} />}
                />
                <AccordionItem
                    title="Historia cen"
                    content={
                        <TableSales priceHistory rowsArray={priceHistory} />
                    }
                />
            </Right>
            <div className='asda' />
        </Wrapper>
    );
};

export default NFTDetails;
