import React from 'react'
import Balance from '../components/Balance';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WithoutLogin from '../components/WithoutLogin';
import styled from 'styled-components';
import LastOpertions from '../components/LastOpertions';
import { useSelector } from 'react-redux';

const Container = styled.div`
    width: 100%;
    padding-top: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Home = () => {
    const user = useSelector(state => state.user.currentUser);
    return (
        <div>
            <Navbar />
            {
                user ?
                <Container>
                    <Balance />
                    <LastOpertions />
                </Container>
                :
                <WithoutLogin />
            }
            <Footer />
        </div>
    )
}

export default Home