import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

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
    ${mobile({width: "90%"})}
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
    ${mobile({flexDirection: "column", textAlign: "center"})}
`;

const Income = styled.div``;

const Expense = styled.div``;

const Balance = ({balance}) => {
    const currency = JSON.parse(localStorage.getItem("user")).dataValues.currency;
    return (
        <Container>
            <Wrapper>
                <Title>Balance</Title>
                <Total>Total: {currency} {balance?.total || 0}</Total>
                <SubContainer>
                    <Income>Income: {currency} {balance?.income || 0}</Income>
                    <Expense>Expense: {currency} {balance?.expense || 0}</Expense>
                </SubContainer>
            </Wrapper>
        </Container>
    )
}

export default Balance