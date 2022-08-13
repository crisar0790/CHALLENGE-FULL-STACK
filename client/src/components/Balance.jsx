import React from 'react'
import styled from 'styled-components';

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
    border: 1px solid gray;
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