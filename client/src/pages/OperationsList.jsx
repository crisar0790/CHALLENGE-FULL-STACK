import React from 'react';
import styled from "styled-components";
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Operations from '../components/Operations';
import Balance from '../components/Balance';
import { useDispatch } from 'react-redux';
import { getTypes } from '../actions/operations';
import { useEffect } from 'react';

const Container = styled.div`
    width: 100%;
    padding-top: 6em;
    padding-bottom: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const OperationsList = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const balance = user && JSON.parse(localStorage.getItem("balance"));
  const types = user && JSON.parse(localStorage.getItem("types"));

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Container>
        <Balance balance={balance} />
        <Filters types={types} />
        <Operations />
      </Container>
      <Footer />
    </div>
  )
}

export default OperationsList