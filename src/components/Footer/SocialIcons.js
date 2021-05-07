import React from 'react';
import styled from 'styled-components';
import {
    FaDiscord,
    FaInstagram,
    FaLinkedin,
    FaFacebookSquare,
} from 'react-icons/fa';

const Wrapper = styled.div`
    width: 100%;
    margin: 30px 0;
    display: flex;
    align-items: center;

    ${({ theme }) => theme.media.phone} {
        flex-direction: column;
    }
`;
const Icons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${({ theme }) => theme.media.phone} {
        justify-content: center;
        margin-top: 30px;
    }
`;

const Item = styled.div`
    margin: 10px;
    color: ${({ theme }) => theme.colors.menu.link};
    svg {
        width: 35px;
        height: 35px;
    }

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.menu.hoverLink};
    }
`;

const Description = styled.div`
    width: 100%;
    display: flex;
    font-size: ${({ theme }) => theme.font.size.xs};
`;

const SocialIcons = () => (
    <Wrapper>
        <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            culpa dicta dolorum laudantium molestias obcaecati ratione totam!
            Aut debitis et impedit in iure omnis quaerat quia, quidem reiciendis
            veritatis vero!
        </Description>
        <Icons>
            <Item>
                <FaDiscord />
            </Item>
            <Item>
                <FaInstagram />
            </Item>
            <Item>
                <FaLinkedin />
            </Item>
            <Item>
                <FaFacebookSquare />
            </Item>
        </Icons>
    </Wrapper>
);

export default SocialIcons;
