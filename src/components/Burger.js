import React from 'react';
import styled from 'styled-components';

const BurgerWrapper = styled.div`
    display: none;

    @media (max-width: 1350px) {
        min-width: 2rem;
        height: 2rem;
        /* position: absolute; */
        right: 10%;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        cursor: pointer;
        margin: 10px;

        #first,
        #third,
        #secound {
            transition: transform 0.35s ease-in-out;
        }
    }
`;

const Line = styled.div`
    width: 100%;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.menu.link};
    border-radius: 10px;
`;

// eslint-disable-next-line react/prop-types
const Burger = ({ click }) => (
    <BurgerWrapper id='burger' onClick={click}>
        <Line id='first' />
        <Line id='secound' />
        <Line id='third' />
    </BurgerWrapper>
);

export default Burger;
