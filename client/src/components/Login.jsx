import React, { useState } from 'react';
import styled from "styled-components";
import { GrClose } from 'react-icons/gr';
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from 'react-redux';

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
    min-width: 40%;
    margin: 10px 5px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Link = styled.a`
    margin: 10px 5px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color: red;
`;

const Login = ({ showLogin, onClose, register }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { email, password })
    }

    if (!showLogin) return null;
    return (
        <Container>
            <Wrapper>
                <ButtonClose><GrClose style={{ fontSize: "1em", cursor: "pointer" }} onClick={onClose} /></ButtonClose>
                <Title>LOGIN</Title>
                <Form>
                    <Input placeholder='email' onChange={(e) => {setEmail(e.target.value)}} />
                    <Input type='password' placeholder='password' onChange={(e) => {setPassword(e.target.value)}} />
                    <Button onClick={{handleClick, onClose}} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link onClick={register}>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login