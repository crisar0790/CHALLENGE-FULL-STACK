import React from 'react';
import styled from "styled-components";
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Operations from '../components/Operations';
import Balance from '../components/Balance';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, getCategories, getOperations } from '../actions/operations';
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
  const { balance } = useSelector(state => state.operations);
  const { types } = useSelector(state => state.operations);
  const { categories } = useSelector(state => state.operations);
  const { operations } = useSelector(state => state.operations);

  useEffect(() => {
    if (user) {
      dispatch(getTypes());
      dispatch(getCategories());
      dispatch(getOperations('des'));
    }
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Container>
        <Balance balance={balance} />
        <Filters types={types} categories={categories} />
        <Operations allOperations={operations} />
      </Container>
      <Footer />
    </div>
  )
}

export default OperationsList