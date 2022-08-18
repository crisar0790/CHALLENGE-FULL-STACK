import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from 'react-icons/gr';
import { register } from "../actions/auth";
import { useDispatch } from "react-redux";

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

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 5px;
`;

const Button = styled.button`
    min-width: 40%;
    border: none;
    margin: 10px 5px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = ({ showRegister, onClose, setShowRegister }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch(); 

    const handleRegister = (e) => {
        e.preventDefault();
        if (firstName, lastName, email, password) {
            dispatch(register(firstName, lastName, email, password));
        }
        setShowRegister(false);
    };

    if (!showRegister) return null;
    return (
        <Container>
            <Wrapper>
                <ButtonClose><GrClose style={{ fontSize: "1em", cursor: "pointer" }} onClick={onClose} /></ButtonClose>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='first name' onChange={(e) => { setFirstName(e.target.value) }} />
                    <Input placeholder='last name' onChange={(e) => { setLastName(e.target.value) }} />
                    <Input placeholder='email' onChange={(e) => { setEmail(e.target.value) }} />
                    <Input type='password' placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
                    <Input type='password' placeholder='confirm password' />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleRegister}>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register