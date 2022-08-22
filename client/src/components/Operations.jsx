import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    box-sizing: border-box;
`;

const Table = styled.table`
    margin: auto;
    width: 100%;
    line-height:2rem;
    overflow-x: auto;
`;

const THead = styled.thead``;

const Row = styled.tr``;

const Column = styled.th`
    padding: 0 10px;
`;

const TBody = styled.tbody`
    font-weight: 300;
`;

const Button = styled.button`
    margin: 10px 5px;
    border: 1px solid teal;
    padding: 15px 20px;
    background-color: white;
    color: teal;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        border: 1px solid white;
        padding: 15px 20px;
        background-color: teal;
        color: white;
    }
`;

const ButtonDelete = styled.button`
    margin: 10px 5px;
    border: 1px solid red;
    padding: 15px 20px;
    background-color: white;
    color: red;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        border: 1px solid white;
        padding: 15px 20px;
        background-color: red;
        color: white;
    }
`;

const Operations = ({ lastOperations, allOperations, handleDelete, handleEdit }) => {
    if (lastOperations) {
        return (
            <Container>
                <Wrapper>
                    <Table>
                        <THead>
                            <Row>
                                <Column>Type</Column>
                                <Column>Category</Column>
                                <Column>Concept</Column>
                                <Column>Amount</Column>
                                <Column>Date</Column>
                            </Row>
                        </THead>
                        <TBody>
                            {
                                lastOperations?.map((op, k) => ( 
                                    <Row key={k}>
                                        <Column>{op.type.type}</Column>
                                        <Column>{op.category.category}</Column>
                                        <Column>{op.concept}</Column>
                                        <Column>{op.amount}</Column>
                                        <Column>{(op.date).split('T')[0].split('-').reverse().join('-')}</Column>
                                        <Column><Button onClick={() => handleEdit(op.id)} >Edit</Button></Column>
                                        <Column><ButtonDelete onClick={() => handleDelete(op.id)} >Delete</ButtonDelete></Column>
                                    </Row>
                                ))
                            }
                        </TBody>
                    </Table>
                </Wrapper>
            </Container>
        )
    } else if (allOperations) {
        return (
            <Container>
                <Wrapper>
                    <Table>
                        <THead>
                            <Row>
                                <Column>Type</Column>
                                <Column>Category</Column>
                                <Column>Concept</Column>
                                <Column>Amount</Column>
                                <Column>Date</Column>
                            </Row>
                        </THead>
                        <TBody>
                            {
                                allOperations?.map((op, k) => (
                                    <Row key={k}>
                                        <Column>{op.type.type}</Column>
                                        <Column>{op.category.category}</Column>
                                        <Column>{op.concept}</Column>
                                        <Column>{op.amount}</Column>
                                        <Column>{(op.date).split('T')[0].split('-').reverse().join('-')}</Column>
                                        <Column><Button onClick={() => handleEdit(op.id)} >Edit</Button></Column>
                                        <Column><ButtonDelete onClick={() => handleDelete(op.id)} >Delete</ButtonDelete></Column>
                                    </Row>
                                ))
                            }
                        </TBody>
                    </Table>
                </Wrapper>
            </Container>
        )
    }
}

export default Operations