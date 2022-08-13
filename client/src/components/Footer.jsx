import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    border-top: 1px solid gray;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    aling-items: center;
    justify-content: center;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Left>Cristian Ariel Achetoni</Left>
            <Right>
                <BsLinkedin style={{ fontSize: "1em", marginLeft: "25px", cursor: "pointer" }} />
                <BsGithub style={{ fontSize: "1em", marginLeft: "25px", cursor: "pointer" }} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Footer;