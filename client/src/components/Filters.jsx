import React, { useState } from 'react';
import styled from "styled-components";
import AddOperation from './AddOperation';

const Container = styled.div`
    width: 100%;
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
`;

const Order = styled.div`
    margin: 10px 20px;
`;

const OrderDate = styled.label``;

const OrderDateSelect = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const OrderDateOption = styled.option``;

const Filter = styled.div`
    margin: 10px 20px;
`;

const FilterTitle = styled.label``;

const FilterSelect = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterOption = styled.option``;

const Button = styled.button`
    margin: 10px 5px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-weight: 700;
    cursor: pointer;
`;

const Filters = ({ types, categories, handleGetOperationsByOrder, handleGetOperationsByType, handleGetOperationsByCategory }) => {
    const [showAdd, setShowAdd] = useState(false);
    if (types && categories) {
        return (
            <Container>
                <Wrapper>
                    <Order>
                        <OrderDate>Order by date</OrderDate>
                        <OrderDateSelect onChange={(e) => handleGetOperationsByOrder(e)} >
                            <OrderDateOption value='des' >Recent operations</OrderDateOption>
                            <OrderDateOption value='asc' >Older operations</OrderDateOption>
                        </OrderDateSelect>
                    </Order>
                    <Filter>
                        <FilterTitle>Type</FilterTitle>
                        <FilterSelect onChange={(e) => handleGetOperationsByType(e)} >
                            <FilterOption value='' >All types</FilterOption>
                            {
                                types?.map((t, k) => (
                                    <FilterOption key={k} value={t.type} >{t.type}</FilterOption>
                                ))
                            }
                        </FilterSelect>
                    </Filter>
                    <Filter>
                        <FilterTitle>Category</FilterTitle>
                        <FilterSelect onChange={(e) => handleGetOperationsByCategory(e)}>
                            <FilterOption value='' >All categories</FilterOption>
                            {
                                categories?.map((c, k) => (
                                    <FilterOption key={k} value={c.category} >{c.category}</FilterOption>
                                ))
                            }
                        </FilterSelect>
                    </Filter>
                    <Button onClick={() => setShowAdd(true)} >Add operation</Button>
                    <AddOperation showAdd={showAdd} onClose={() => setShowAdd(false)} setShowAdd={setShowAdd} />
                </Wrapper>
            </Container>
        )
    }
}

export default Filters