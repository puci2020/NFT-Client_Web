import React, { useState } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Link } from 'react-router-dom';
import NavList from './Navlist';
import Burger from './Burger';
// import logo from "../../img/logo.png"
import Input from '../shared/Input';

const NavbarWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100vw;
    height: ${({ scroll }) => (scroll ? '80px' : '90px')};
    padding: 10px 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.menu.navBackground};
    box-shadow: 2px 0 5px ${({ theme }) => theme.colors.menu.shadow};
    color: ${({ theme }) => theme.colors.menu.link};
    font-size: ${(props) =>
        props.scroll ? props.theme.font.size.xxs : props.theme.font.size.xs};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    letter-spacing: ${({ theme }) => theme.font.space.s};
    transition: background-color 1s, height 1s, font-size 1s;
    z-index: 2;
    overflow: hidden;

    ${({ theme }) => theme.media.phone} {
        padding: 10px 30px;
    }
`;

const LogoWrapper = styled.div`
    position: relative;
    float: left;
    height: 70%;
    min-width: 50px;
    overflow: hidden;
    margin-right: 10px;
    display: flex;
    align-items: center;

    img {
        height: 90%;
    }
`;

// eslint-disable-next-line react/prop-types
const Navbar = ({ drawerClickHandler, loadWeb3Handler }) => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) setNavbar(true);
        else setNavbar(false);
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <NavbarWrapper scroll={navbar}>
            <LogoWrapper>
                <Router>
                    <Link to='/'>
                        {/* <img src={logo} alt="Fuddi logo"/> */}
                        Logo
                    </Link>
                </Router>
            </LogoWrapper>

            <Input type='text' width='400px' placeholder='Search by name' />
            <NavList loadWeb3={loadWeb3Handler} />
            <Burger click={drawerClickHandler} />
        </NavbarWrapper>
    );
};

export default Navbar;
