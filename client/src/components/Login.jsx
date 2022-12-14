import React, { useState } from 'react';
import styled from "styled-components";
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../actions/auth";
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
    ${mobile({width: "90%"})}
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
    &:disabled {
        background-color: gray;
        cursor: not-allowed;
    }
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
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        if (email && password) {
            dispatch(login(email, password))
                .then(() => {
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (!showLogin) return null;
    return (
        <Container>
            <Wrapper>
                <ButtonClose><GrClose style={{ fontSize: "1em", cursor: "pointer" }} onClick={onClose} /></ButtonClose>
                <Title>LOGIN</Title>
                <Form>
                    <Input placeholder='email' onChange={(e) => { /\S+@\S+\.\S+/.test(e.target.value) ? setEmail(e.target.value) : setEmail('') }} />
                    <Input type='password' placeholder='password' onChange={(e) => { e.target.value.length >= 6 ? setPassword(e.target.value) : setPassword('') }} />
                    <Button onClick={handleLogin} disabled={email === '' || password === ''} >LOGIN</Button>
                    {message && <Error>{message}</Error>}
                    <Link onClick={register}>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login