import React from 'react';
import styled from "styled-components";
import { GrClose } from 'react-icons/gr';
import { mobile } from '../responsive';

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
    ${mobile({ width: "95%" })}
`;

const ButtonClose = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    outline: none;
    border: none;
    font-size: 17px;
    background-color: transparent;
`;

const Title = styled.h1`
    margin-top: 1rem;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`;

const SubContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 18px;
`;

const Item = styled.p`
    flex: 1;
    min-width: 40%;
    margin: 10px 5px;
    padding: 10px;
    border: 1px solid teal;
    box-shadow: 0 8px 2px -2px gray;
`;

const Profile = ({showProfile, setShowProfile}) => {
    const user = JSON.parse(localStorage.getItem("user")).dataValues;

    if (!showProfile) return null;

    return (
        <Container>
            <Wrapper>
                <ButtonClose>
                    <GrClose style={{ fontSize: "1em", cursor: "pointer" }}
                        onClick={() => { setShowProfile(false) }} /></ButtonClose>
                <Title>PROFILE INFORMATION</Title>
                <SubContainer>
                    <Item>First name: {user.firstName}</Item>
                    <Item>Last name: {user.lastName}</Item>
                    <Item>Email: {user.email}</Item>
                    <Item>Currency: {user.currency}</Item>
                </SubContainer>
            </Wrapper>
        </Container>
    )
}

export default Profile;