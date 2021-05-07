import React from 'react';
import styled from 'styled-components';
import NavList from './Navlist';

const NavWrapper = styled.nav`
    .side {
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.menu.navBackground};
        box-shadow: 2px 0 5px ${({ theme }) => theme.colors.menu.shadow};
        position: fixed;
        top: 0;
        left: 0;
        width: 70%;
        max-width: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(-100%);
        transition: transform 0.35s ease-in-out;
        z-index: 2;
    }

    .open {
        transform: translateX(0);
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0 30px;
        height: auto;
        flex-direction: column;
    }
`;

// eslint-disable-next-line react/prop-types
const SideDrawer = ({ show, drawerClickHandler, loadWeb3Handler }) => {
    let drawerClasses = 'side';
    if (show) {
        drawerClasses = 'side open';
    }

    return (
        <NavWrapper>
            <div className={drawerClasses}>
                <NavList
                    click={drawerClickHandler}
                    loadWeb3={loadWeb3Handler}
                />
            </div>
        </NavWrapper>
    );
};

export default SideDrawer;
