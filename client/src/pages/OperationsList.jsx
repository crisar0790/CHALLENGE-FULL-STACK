import React from 'react';
import styled from "styled-components";
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Operations from '../components/Operations';
import Balance from '../components/Balance';

const Container = styled.div`
    width: 100%;
    padding-top: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const OperationsList = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Balance />
        <Filters />
        <Operations />
      </Container>
      <Footer />
    </div>
  )
}

export default OperationsList