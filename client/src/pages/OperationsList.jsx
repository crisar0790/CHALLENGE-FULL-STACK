import React, { useState } from 'react';
import styled from "styled-components";
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Operations from '../components/Operations';
import Balance from '../components/Balance';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, getCategories, getOperations, deleteOperation, createOperation, getBalance } from '../actions/operations';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { balance } = useSelector(state => state.operations);
  const { types } = useSelector(state => state.operations);
  const { categories } = useSelector(state => state.operations);
  const { operations } = useSelector(state => state.operations);
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [order, setOrder] = useState('des');

  const [concept, setConcept] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [typeAdd, setTypeAdd] = useState('');
  const [categoryAdd, setCategoryAdd] = useState('');

  useEffect(() => {
    if (user) {
      dispatch(getTypes());
      dispatch(getCategories());
      dispatch(getOperations(type, category, order));
      dispatch(getBalance());
    }
  }, [dispatch, createOperation, deleteOperation]);

  const handleGetOperationsByOrder = (e) => {
    setOrder(e.target.value);
    dispatch(getOperations(type, category, e.target.value));
  };

  const handleGetOperationsByType = (e) => {
    setType(e.target.value);
    dispatch(getOperations(e.target.value, category, order));
  };

  const handleGetOperationsByCategory = (e) => {
    setCategory(e.target.value);
    dispatch(getOperations(type, e.target.value, order));
  };

  const handleDelete = (id) => {
    dispatch(deleteOperation(id));
    dispatch(getOperations(type, category, order));
  };

  const handleEdit = (id) => {
    dispatch()
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(createOperation(concept, amount, date, typeAdd, categoryAdd));
    dispatch(getOperations(type, category, order));
  };



  if (!user) {
    navigate('/');
  }
  return (
    <div>
      <Navbar />
      <Container>
        <Balance balance={balance} />
        <Filters
          types={types}
          categories={categories}
          handleGetOperationsByOrder={handleGetOperationsByOrder}
          handleGetOperationsByType={handleGetOperationsByType}
          handleGetOperationsByCategory={handleGetOperationsByCategory}
          handleAdd={handleAdd}
          setConcept={setConcept}
          setAmount={setAmount}
          setDate={setDate}
          setTypeAdd={setTypeAdd}
          setCategoryAdd={setCategoryAdd} />
        <Operations allOperations={operations} handleDelete={handleDelete} handleEdit={handleEdit} />
      </Container>
      <Footer />
    </div>
  )
}

export default OperationsList