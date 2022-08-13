import React from 'react';
import styled from "styled-components";
import { GrClose } from 'react-icons/gr';

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
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 5px;
    padding: 10px;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Link = styled.a`
    margin-top: 20px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = ({ showLogin, onClose, register }) => {
    if (!showLogin) return null;
    return (
        <Container>
            <Wrapper>
                <ButtonClose><GrClose style={{ fontSize: "1em", cursor: "pointer" }} onClick={onClose} /></ButtonClose>
                <Title>LOGIN</Title>
                <Form>
                    <Input placeholder='email' />
                    <Input type='password' placeholder='password' />
                    <Button>LOGIN</Button>
                    <Link onClick={register}>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login