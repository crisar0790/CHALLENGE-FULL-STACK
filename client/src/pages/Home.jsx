import React from 'react'
import Balance from '../components/Balance';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WithoutLogin from '../components/WithoutLogin';
import styled from 'styled-components';
import LastOpertions from '../components/LastOpertions';

const Container = styled.div`
    width: 100%;
    padding-top: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Home = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(JSON.parse(localStorage.getItem("user")))
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