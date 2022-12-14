import React, { useEffect } from 'react';
import styled from "styled-components";
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../actions/operations';
import { mobile } from '../responsive';

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border: 1px solid gray;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 1.3rem;
    ${mobile({ width: "90%" })}
`;

const ButtonClose = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    outline: none;
    border: none;
    font-size: 17px;
    background-color: transparent;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 5px;
    padding: 10px;
`;

const Select = styled.div`
    flex: 1;
    min-width: 40%;
    margin: 10px 5px;
`;

const Category = styled.select`
    padding: 10px;
    width: 100%;
`;

const Option = styled.option``;

const Button = styled.button`
    min-width: 40%;
    border: none;
    margin: 10px 5px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:disabled {
        background-color: gray;
        cursor: not-allowed;
    }
`;

const EditOperation = ({
    showEdit,
    setShowEdit,
    handleEdit,
    conceptChange,
    setConceptChange,
    amountChange,
    setAmountChange,
    dateChange,
    setDateChange,
    setConceptEdit,
    conceptEdit,
    setAmountEdit,
    amountEdit,
    setDateEdit,
    dateEdit,
    setCategoryEdit,
    categoryEdit }) => {
    const { categories } = useSelector(state => state.operations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const categoriesFiltered = categories?.filter(c => c.category !== categoryEdit);

    if (!showEdit) return null;

    return (
        <Container>
            <Wrapper>
                <ButtonClose>
                    <GrClose style={{ fontSize: "1em", cursor: "pointer" }}
                        onClick={() => { setShowEdit(false) }} /></ButtonClose>
                <Title>EDIT OPERATION</Title>
                <Form>
                    <Input placeholder='concept' value={conceptEdit} onChange={(e) => { setConceptEdit(e.target.value); setConceptChange(e.target.value) }} />
                    <Input placeholder='amount: positive numbers' value={amountEdit} type='number' onChange={(e) => { setAmountEdit(e.target.value); setAmountChange(e.target.value) }} />
                    <Input type='date' value={dateEdit.split('T')[0].split('-').join('-')} onChange={(e) => { setDateEdit(e.target.value); setDateChange(e.target.value) }} />
                    <Select>
                        <Category onChange={(e) => setCategoryEdit(e.target.value)}>
                            <Option value={categoryEdit} >{categoryEdit}</Option>
                            {
                                categoriesFiltered?.map((c, k) => (
                                    <Option key={k} value={c.category} >{c.category}</Option>
                                ))
                            }
                        </Category>
                    </Select>
                    <Button
                        onClick={(e) => { handleEdit(e); setShowEdit(false) }}
                        disabled={conceptChange === '' || amountChange === 0 || amountChange === '' || amountChange < 0 || dateChange === ''}
                    >EDIT</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default EditOperation