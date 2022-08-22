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

const Filters = ({types, categories, handleGetOperationsByOrder,  handleGetOperationsByType, handleGetOperationsByCategory}) => {
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
                            <FilterSelect  onChange={(e) => handleGetOperationsByCategory(e)}>
                                <FilterOption value='' >All categories</FilterOption>
                                {
                                    categories?.map((c, k) => (
                                        <FilterOption key={k} value={c.category} >{c.category}</FilterOption>
                                    ))
                                }
                            </FilterSelect>
                        </Filter>
                </Wrapper>
            </Container>
        )
    }
}

export default Filters