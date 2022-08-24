import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddOperation from './AddOperation';
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

const LastOpertions = ({
    lastOperations,
    handleDelete,
    showAdd,
    setShowAdd,
    handleAdd,
    setConcept,
    setAmount,
    setDate,
    setTypeAdd,
    setCategoryAdd,
    handleEdit,
    showEdit,
    setShowEdit,
    setOpId,
    conceptEdit,
    setConceptEdit,
    amountEdit,
    setAmountEdit,
    dateEdit,
    setDateEdit,
    categoryEdit,
    setCategoryEdit,
    conceptChange,
    setConceptChange,
    amountChange,
    setAmountChange,
    dateChange,
    setDateChange }) => {
    if (!lastOperations?.length) {
        return (
            <Container>
                <Wrapper>
                    <Title>You have not registered operations yet.</Title>
                    <Button onClick={() => setShowAdd(true)} >Add operation</Button>
                    <AddOperation
                        showAdd={showAdd}
                        onClose={() => setShowAdd(false)}
                        setShowAdd={setShowAdd}
                        handleAdd={handleAdd}
                        setConcept={setConcept}
                        setAmount={setAmount}
                        setDate={setDate}
                        setTypeAdd={setTypeAdd}
                        setCategoryAdd={setCategoryAdd}
                    />
                </Wrapper>
            </Container>
        )
    }
    return (
        <Container>
            <Wrapper>
                <Title>Last Operations</Title>
                <Operations
                    lastOperations={lastOperations}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    showEdit={showEdit}
                    setShowEdit={setShowEdit}
                    setOpId={setOpId}
                    conceptEdit={conceptEdit}
                    setConceptEdit={setConceptEdit}
                    amountEdit={amountEdit}
                    setAmountEdit={setAmountEdit}
                    dateEdit={dateEdit}
                    setDateEdit={setDateEdit}
                    categoryEdit={categoryEdit}
                    setCategoryEdit={setCategoryEdit}
                    conceptChange={conceptChange}
                    setConceptChange={setConceptChange}
                    amountChange={amountChange}
                    setAmountChange={setAmountChange}
                    dateChange={dateChange}
                    setDateChange={setDateChange} />
                <Link to='/operations'>
                    <Button onClick={() => window.scroll(0, 0)}>Show more operations</Button>
                </Link>
                <Button onClick={() => setShowAdd(true)} >Add operation</Button>
                <AddOperation
                    showAdd={showAdd}
                    onClose={() => setShowAdd(false)}
                    setShowAdd={setShowAdd}
                    handleAdd={handleAdd}
                    setConcept={setConcept}
                    setAmount={setAmount}
                    setDate={setDate}
                    setTypeAdd={setTypeAdd}
                    setCategoryAdd={setCategoryAdd}
                />
            </Wrapper>
        </Container>
    )
}

export default LastOpertions