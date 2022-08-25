import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getTypes } from '../actions/operations';
import {mobile} from '../responsive';

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
    ${mobile({width: "90%"})}
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

const SubContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({flexDirection: "column"})}
`;

const Select = styled.div`
    margin: 10px 5px;
`;

const Label = styled.label`
    font-size: 14px;
`;

const Type = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const Category = styled.select`
    margin-left: 10px;
    padding: 5px;
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

const AddOperation = ({
    showAdd,
    onClose,
    setShowAdd,
    handleAdd,
    setConcept,
    setAmount,
    setDate,
    setTypeAdd,
    setCategoryAdd }) => {
    const { types } = useSelector(state => state.operations);
    const { categories } = useSelector(state => state.operations);
    const dispatch = useDispatch();

    const [conceptChange, setConceptChange] = useState('');
    const [amountChange, setAmountChange] = useState(0);
    const [dateChange, setDateChange] = useState('');
    const [typeChange, setTypeChange] = useState('');
    const [categoryChange, setCategoryChange] = useState('');

    useEffect(() => {
        dispatch(getTypes());
        dispatch(getCategories());
    }, [dispatch]);

    if (!showAdd) return null;

    return (
        <Container>
            <Wrapper>
                <ButtonClose>
                    <GrClose style={{ fontSize: "1em", cursor: "pointer" }}
                        onClick={() => {
                            setShowAdd(false);
                            setConceptChange(''); 
                            setAmountChange(0); 
                            setDateChange('');
                            setCategoryChange('');
                            setTypeChange('')
                        }} /></ButtonClose>
                <Title>ADD OPERATION</Title>
                <Form>
                    <Input placeholder='concept' onChange={(e) => { setConcept(e.target.value); setConceptChange(e.target.value) }} />
                    <Input placeholder='amount' type='number' onChange={(e) => { setAmount(e.target.value); setAmountChange(e.target.value) }} />
                    <Input type='date' onChange={(e) => { setDate(e.target.value); setDateChange(e.target.value) }} />

                    <SubContainer>
                        <Select>
                            <Label>Type</Label>
                            <Type onChange={(e) => { setTypeAdd(e.target.value); setTypeChange(e.target.value) }} >
                                <Option value='' enable='disabled' >Choose one</Option>
                                {
                                    types?.map((t, k) => (
                                        <Option key={k} value={t.type} >{t.type}</Option>
                                    ))
                                }
                            </Type>
                        </Select>
                        <Select>
                            <Label>Category</Label>
                            <Category onChange={(e) => { setCategoryAdd(e.target.value); setCategoryChange(e.target.value) }}>
                                <Option value='' enable='disabled' >Choose one</Option>
                                {
                                    categories?.map((c, k) => (
                                        <Option key={k} value={c.category} >{c.category}</Option>
                                    ))
                                }
                            </Category>
                        </Select>
                    </SubContainer>

                    <Button
                        onClick={(e) => { handleAdd(e); 
                            setShowAdd(false);
                            setConceptChange(''); 
                            setAmountChange(0); 
                            setDateChange('');
                            setCategoryChange('');
                            setTypeChange('') }}
                        disabled={conceptChange === '' || amountChange === 0 || amountChange === '' || dateChange === '' || typeChange === '' || categoryChange === ''} >CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default AddOperation