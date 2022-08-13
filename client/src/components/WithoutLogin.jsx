import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    margin-bottom: 2em;
`;

const Text = styled.span``;

const WithoutLogin = () => {
  return (
    <Container>
        <Title>Welcome to MANAGER</Title>
        <Text>Please register or login to use our service.</Text>
    </Container>
  )
}

export default WithoutLogin