import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { HashRouter as Router } from 'react-router-dom';
import { RiAccountBoxFill, RiWallet3Fill } from 'react-icons/ri';

const NavWrapper = styled.div`
    /* position: absolute;
    width: auto;
    right: 10%; */
`;

const UL = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;

    #lang {
        margin-left: 30px;
        background: transparent;
        outline: none;
        border: none;
        color: ${({ theme }) => theme.colors.white};

        option {
            color: black;
        }
    }

    #lang2 {
        display: none;
    }

    ${({ theme }) => theme.media.bigTablet} {
        display: none;

        #lang {
            display: none;
        }

        #lang2 {
            display: block;
        }
    }
`;

const Li = styled.li`
    border: ${(props) => (props.gold ? '2px solid red' : '')};
    padding: 30px 10px;

    a {
        height: 100%;
        text-decoration: none;
        font-weight: ${({ theme }) => theme.font.weight.plusRegular};
        color: ${({ theme }) => theme.colors.menu.link};

        &:hover {
            color: ${({ theme }) => theme.colors.menu.hoverLink};
            cursor: pointer;
        }
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.div`
    margin: 0 10px;
    svg {
        width: 30px;
        height: 30px;
    }

    &:hover {
        color: #8d8b8f;
        cursor: pointer;
    }
`;

// eslint-disable-next-line react/prop-types
const NavList = ({ click, loadWeb3 }) => (
    <NavWrapper>
        <Router>
            <UL>
                <Li gold='true'>
                    <Link
                        smooth
                        onClick={click}
                        to='/'
                        scroll={(el) =>
                            el.scrollIntoView({ behavior: 'smooth' })
                        }
                        top='0'
                    >
                        Współpraca
                    </Link>
                </Li>
                <Li>
                    <Link
                        smooth
                        onClick={click}
                        to='/'
                        scroll={(el) =>
                            el.scrollIntoView({ behavior: 'smooth' })
                        }
                        top='0'
                    >
                        Partnerzy
                    </Link>
                </Li>
                <Li>
                    <Link
                        smooth
                        onClick={click}
                        to='/'
                        scroll={(el) =>
                            el.scrollIntoView({ behavior: 'smooth' })
                        }
                        top='0'
                    >
                        Przeglądaj
                    </Link>
                </Li>
                <Li>
                    <Link
                        smooth
                        onClick={click}
                        to='/'
                        scroll={(el) =>
                            el.scrollIntoView({ behavior: 'smooth' })
                        }
                        top='0'
                    >
                        Ranking
                    </Link>
                </Li>
                <Li>
                    <Link
                        smooth
                        onClick={click}
                        to='/'
                        scroll={(el) =>
                            el.scrollIntoView({ behavior: 'smooth' })
                        }
                        top='0'
                    >
                        Blog
                    </Link>
                </Li>
                <Li>
                    <Link
                        smooth
                        onClick={click}
                        to='/test'
                        scroll={(el) =>
                            el.scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        Społeczność
                    </Link>
                </Li>
                <Li>
                    <Link
                        smooth
                        onClick={click}
                        to='/test'
                        scroll={(el) =>
                            el.scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        Stwórz
                    </Link>
                </Li>
                <Li>
                    <Icons>
                        <Icon>
                            <Link
                                smooth
                                onClick={click}
                                to='/account'
                                scroll={(el) =>
                                    el.scrollIntoView({ behavior: 'smooth' })
                                }
                            >
                                <RiAccountBoxFill />
                            </Link>
                        </Icon>
                        <Icon
                            onClick={() => {
                                loadWeb3();
                                if (click) {
                                    click();
                                }
                            }}
                        >
                            <RiWallet3Fill />
                        </Icon>
                    </Icons>
                </Li>
            </UL>
        </Router>
    </NavWrapper>
);

export default NavList;
