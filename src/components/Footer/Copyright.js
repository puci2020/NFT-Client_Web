import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    color: ${({ theme }) => theme.colors.menu.link};
`;

const Copyright = () => (
    <Wrapper>Copyright © 2021. All rights reserved.</Wrapper>
);

export default Copyright;
