import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Operations from './Operations';

const Container = styled.div`
    width: 100%;
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`;

const Button = styled.button`
    margin: 10px 5px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-weight: 700;
    cursor: pointer;
`;

const LastOpertions = ({ lastOperations }) => {
    if (!lastOperations) {
        return (
            <Container>
                <Wrapper>
                    <Title>You have not registered operations yet.</Title>
                    <Button>Add operation</Button>
                </Wrapper>
            </Container>
        )
    }
    return (
        <Container>
            <Wrapper>
                <Title>Last Operations</Title>
                <Operations lastOperations={lastOperations} />
                <Link to='/operations'>
                    <Button onClick={() => window.scroll(0, 0)}>Show more operations</Button>
                </Link>
                <Button>Add operation</Button>
            </Wrapper>
        </Container>
    )
}

export default LastOpertions