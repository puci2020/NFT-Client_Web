import styled from 'styled-components';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.menu.hoverLink};
        transition: color 0.2s ease 0s;
    }
`;
