import React from 'react';
import styled from 'styled-components';
import { MdAccountBalance } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

const Container = styled.div`
    height: 60px;
    border-bottom: 1px solid gray;
    box-shadow: 0 8px 2px -2px gray;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    aling-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Title = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    const user = false;
    return (
        <Container>
            <Wrapper>
                <Left>
                    <MdAccountBalance style={{ fontSize: "2em" }} />
                </Left>
                <Center>
                    <Title>MANAGER</Title>
                </Center>
                {
                    user ?
                        <Right>
                            <MenuItem>LOG OUT</MenuItem>
                            <FaUserCircle style={{ fontSize: "2em", paddingLeft: "25px", cursor: "pointer" }} />
                        </Right>
                        :
                        <Right>
                            <MenuItem>REGISTER</MenuItem>
                            <MenuItem>LOG IN</MenuItem>
                        </Right>
                }
            </Wrapper>
        </Container>
    )
}

export default Navbar;