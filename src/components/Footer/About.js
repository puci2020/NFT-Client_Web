import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;

const Header = styled.div`
    font-size: ${({ theme }) => theme.font.size.l};
`;

const Description = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`;

const About = () => (
    <Wrapper>
        <Header>NFT Market</Header>
        <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquid aut autem beatae mollitia nemo perferendis repudiandae
            veritatis voluptate. A aliquid dolor ea fugiat harum iusto maiores,
            nesciunt quod voluptate.
        </Description>
    </Wrapper>
);

export default About;
