import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import styled from 'styled-components';

const Container = styled.div`
    height: 40px;
    border-top: 2px solid gray;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: teal;
`;

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    aling-items: center;
    justify-content: center;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Link = styled.a`
    display: flex;
    align-items: center;
`;

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>Cristian Ariel Achetoni</Left>
                <Right>
                    <Link target="_blank" href='https://www.linkedin.com/in/cristian-ariel-achetoni-developer/'>
                        <BsLinkedin style={{ fontSize: "1em", marginLeft: "25px", color: "white", cursor: "pointer" }} />
                    </Link>
                    <Link target="_blank" href='https://github.com/crisar0790'>
                        <BsGithub style={{ fontSize: "1em", marginLeft: "25px", color: "white", cursor: "pointer" }} />
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Footer;