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
`;

const ButtonClose = styled.button`
    margin: 10px 5px;
    border: 1px solid red;
    padding: 15px 20px;
    background-color: white;
    color: red;
    font-weight: 700;
    cursor: pointer;
`;

const Operations = () => {
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
                    <Row>
                        <Column>Income</Column>
                        <Column>Salary</Column>
                        <Column>Salary of July</Column>
                        <Column>$ 8560</Column>
                        <Column>29-07-2022</Column>
                        <Column><Button>Edit</Button></Column>
                        <Column><ButtonClose>Delete</ButtonClose></Column>
                    </Row>
                    <Row>
                        <Column>Income</Column>
                        <Column>Salary</Column>
                        <Column>Salary of July</Column>
                        <Column>$ 8560</Column>
                        <Column>29-07-2022</Column>
                        <Column><Button>Edit</Button></Column>
                        <Column><ButtonClose>Delete</ButtonClose></Column>
                    </Row>
                    <Row>
                        <Column>Income</Column>
                        <Column>Salary</Column>
                        <Column>Salary of July</Column>
                        <Column>$ 8560</Column>
                        <Column>29-07-2022</Column>
                        <Column><Button>Edit</Button></Column>
                        <Column><ButtonClose>Delete</ButtonClose></Column>
                    </Row>
                    <Row>
                        <Column>Income</Column>
                        <Column>Salary</Column>
                        <Column>Salary of July</Column>
                        <Column>$ 8560</Column>
                        <Column>29-07-2022</Column>
                        <Column><Button>Edit</Button></Column>
                        <Column><ButtonClose>Delete</ButtonClose></Column>
                    </Row>
                    <Row>
                        <Column>Income</Column>
                        <Column>Salary</Column>
                        <Column>Salary of July</Column>
                        <Column>$ 8560</Column>
                        <Column>29-07-2022</Column>
                        <Column><Button>Edit</Button></Column>
                        <Column><ButtonClose>Delete</ButtonClose></Column>
                    </Row>
                    <Row>
                        <Column>Income</Column>
                        <Column>Salary</Column>
                        <Column>Salary of July</Column>
                        <Column>$ 8560</Column>
                        <Column>29-07-2022</Column>
                        <Column><Button>Edit</Button></Column>
                        <Column><ButtonClose>Delete</ButtonClose></Column>
                    </Row>
                    <Row>
                        <Column>Income</Column>
                        <Column>Salary</Column>
                        <Column>Salary of July</Column>
                        <Column>$ 8560</Column>
                        <Column>29-07-2022</Column>
                        <Column><Button>Edit</Button></Column>
                        <Column><ButtonClose>Delete</ButtonClose></Column>
                    </Row>
                    <Row>
                        <Column>Income</Column>
                        <Column>Salary</Column>
                        <Column>Salary of July</Column>
                        <Column>$ 8560</Column>
                        <Column>29-07-2022</Column>
                        <Column><Button>Edit</Button></Column>
                        <Column><ButtonClose>Delete</ButtonClose></Column>
                    </Row>
                    <Row>
                        <Column>Income</Column>
                        <Column>Salary</Column>
                        <Column>Salary of July</Column>
                        <Column>$ 8560</Column>
                        <Column>29-07-2022</Column>
                        <Column><Button>Edit</Button></Column>
                        <Column><ButtonClose>Delete</ButtonClose></Column>
                    </Row>
                    <Row>
                        <Column>Income</Column>
                        <Column>Salary</Column>
                        <Column>Salary of July</Column>
                        <Column>$ 8560</Column>
                        <Column>29-07-2022</Column>
                        <Column><Button>Edit</Button></Column>
                        <Column><ButtonClose>Delete</ButtonClose></Column>
                    </Row>
                </TBody>
            </Table>
        </Wrapper>
    </Container>
  )
}

export default Operations