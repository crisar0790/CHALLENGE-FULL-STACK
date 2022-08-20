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

const Filters = ({types, categories}) => {
    return (
        <Container>
            <Wrapper>
                    <Order>
                        <OrderDate>Order by date</OrderDate>
                        <OrderDateSelect>
                            <OrderDateOption>Recent operations</OrderDateOption>
                            <OrderDateOption>Older operations</OrderDateOption>
                        </OrderDateSelect>
                    </Order>
                    <Filter>
                        <FilterTitle>Type</FilterTitle>
                        <FilterSelect>
                            <FilterOption>All types</FilterOption>
                            {
                                types?.map((t, k) => (
                                    <FilterOption key={k} >{t.type}</FilterOption>
                                ))
                            }
                        </FilterSelect>
                    </Filter>
                    <Filter>
                        <FilterTitle>Category</FilterTitle>
                        <FilterSelect>
                            <FilterOption>All categories</FilterOption>
                            {
                                categories?.map((c, k) => (
                                    <FilterOption key={k} >{c.category}</FilterOption>
                                ))
                            }
                        </FilterSelect>
                    </Filter>
            </Wrapper>
        </Container>
    )
}

export default Filters