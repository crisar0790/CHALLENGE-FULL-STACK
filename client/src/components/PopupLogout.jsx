import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border: 1px solid gray;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 1.3rem;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`;

const Question = styled.p`
    text-align: center;
    margin: 1.5em 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    min-width: 40%;
    margin: 10px 5px;
    border: 1px solid teal;
    padding: 15px 20px;
    background-color: white;
    color: teal;
    font-weight: 700;
    cursor: pointer;
`;

const PopupLogout = ({ showLogout, onClose }) => {
    if(!showLogout) return null;
    return (
        <Container>
            <Wrapper>
                <Title>LOG OUT</Title>
                <Question>Are you sure you want to log out?</Question>
                <ButtonContainer>
                    <Button onClick={onClose} >Cancel</Button>
                    <Button>LOG OUT</Button>
                </ButtonContainer>
            </Wrapper>
        </Container>
    )
}

export default PopupLogout;