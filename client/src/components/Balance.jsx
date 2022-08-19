import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getBalance } from '../actions/operations';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border: 1px solid teal;
    box-shadow: 0 8px 2px -2px teal;
    box-sizing: border-box;
    font-size: 1.3rem;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 0.5em;
`;

const Total = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Income = styled.div``;

const Expense = styled.div``;

const Balance = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBalance());
    },[dispatch])
    return (
        <Container>
            <Wrapper>
                <Title>Balance</Title>
                <Total>Total: $ 7700</Total>
                <SubContainer>
                    <Income>Income: $ 15000</Income>
                    <Expense>Expense: $ 7300</Expense>
                </SubContainer>
            </Wrapper>
        </Container>
    )
}

export default Balance