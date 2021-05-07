import React from 'react';
import styled from 'styled-components';
import Copyright from './Copyright';
import Links from './Links';
import SocialIcons from './SocialIcons';
import About from './About';

const Wrapper = styled.footer`
    width: 100vw;
    height: auto;
    padding: 60px 120px;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.menu.navBackground};

    ${({ theme }) => theme.media.phone} {
        padding: 60px;
    }
`;

const Company = styled.div`
    width: 100%;
    display: flex;
    margin: 30px 0;

    ${({ theme }) => theme.media.phone} {
        flex-direction: column;
        /* padding: 60px; */
    }
`;

const Footer = () => (
    <Wrapper>
        <Company>
            <About />
            <Links />
        </Company>
        <SocialIcons />
        <Copyright />
    </Wrapper>
);

export default Footer;
