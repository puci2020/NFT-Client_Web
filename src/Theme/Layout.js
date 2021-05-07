import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles';
import { theme } from './Theme';
// import { HashLink as Link } from "react-router-hash-link";
import Navbar from '../components/Navbar';
import SideDrawer from '../components/SideDrawer';
import Footer from '../components/Footer/Footer';
import Web3 from 'web3';

const Layout = ({ children }) => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [active, setActive] = useState(false);

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert(
                'Non-Ethereum browser detected. You should consider trying MetaMask!',
            );
        }
    };

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);
        setActive(!active);

        if (!active) {
            document.getElementById('secound').style.display = 'none';
            // eslint-disable-next-line operator-linebreak
            document.getElementById('first').style.transform =
                'translateY(8px) rotate(45deg)';
            // eslint-disable-next-line operator-linebreak
            document.getElementById('third').style.transform =
                'translateY(-8px) rotate(-45deg)';
        } else {
            document.getElementById('secound').style.display = 'block';
            document.getElementById('first').style.transform = 'rotate(0)';
            document.getElementById('first').style.marginTop = '0';
            document.getElementById('third').style.transform = 'rotate(0)';
            document.getElementById('third').style.marginBottom = '0';
        }
    };

    let sideDrawer = <SideDrawer />;

    if (sideDrawerOpen) {
        sideDrawer = (
            <SideDrawer
                show={sideDrawerOpen}
                drawerClickHandler={drawerToggleClickHandler}
                loadWeb3Handler={loadWeb3}
            />
        );
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}

                <Navbar
                    drawerClickHandler={drawerToggleClickHandler}
                    loadWeb3Handler={loadWeb3}
                />
                {sideDrawer}
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default Layout;
