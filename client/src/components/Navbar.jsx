import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAccountBalance } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import Register from './Register';
import Login from './Login';
import PopupLogout from './PopupLogout';
import { mobile } from '../responsive';
import Profile from './Profile';

const Container = styled.div`
    height: 60px;
    width: 100%;
    top: 0;
    position: fixed;
    background-color: white;
    border-bottom: 1px solid gray;
    box-shadow: 0 8px 2px -2px teal;
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
    ${mobile({display: "none"})}
`;

const Title = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: "2"})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
`;

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

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
                            <MenuItem onClick={() => setShowLogout(true)}>LOG OUT</MenuItem>
                            <FaUserCircle style={{ fontSize: "2em", paddingLeft: "25px", cursor: "pointer" }} onClick={() => {setShowProfile(true)}} />
                        </Right>
                        :
                        <Right>
                            <MenuItem onClick={() => setShowRegister(true)}>REGISTER</MenuItem>
                            <MenuItem onClick={() => setShowLogin(true)}>LOG IN</MenuItem>
                        </Right>
                }
                <Register showRegister={showRegister} onClose={() => setShowRegister(false)} setShowRegister={setShowRegister} />
                <Login showLogin={showLogin} onClose={() => setShowLogin(false)} register={() => { setShowLogin(false); setShowRegister(true) }} />
                <PopupLogout showLogout={showLogout} onClose={() => setShowLogout(false)} setShowLogout={setShowLogout} />
                <Profile showProfile={showProfile} setShowProfile={setShowProfile} />
            </Wrapper>
        </Container>
    )
}

export default Navbar;