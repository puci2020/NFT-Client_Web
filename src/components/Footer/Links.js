import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    /* padding: 60px 120px; */
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    ${({ theme }) => theme.media.phone} {
        grid-template-columns: repeat(2, 1fr);
        /* padding: 60px; */
    }
`;

const Item = styled.div`
    justify-self: center;
    font-weight: ${({ theme }) => theme.font.weight.thin};
    color: ${({ theme }) => theme.colors.menu.link};

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.menu.hoverLink};
    }
`;

const Links = () => (
    <Wrapper>
        <Item>About</Item>
        <Item>About</Item>
        <Item>About</Item>
        <Item>About</Item>
        <Item>About</Item>
        <Item>About</Item>
        <Item>About</Item>
        <Item>About</Item>
        <Item>About</Item>
        <Item>About</Item>
        <Item>About</Item>
        <Item>About</Item>
    </Wrapper>
);

export default Links;
