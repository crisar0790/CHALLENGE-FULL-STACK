import React from 'react'
import Balance from '../components/Balance';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WithoutLogin from '../components/WithoutLogin';
import styled from 'styled-components';
import Operations from '../components/Operations';

const Container = styled.div`
    width: 100%;
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Home = () => {
    const user = true;
    return (
        <div>
            <Navbar />
            {
                user ?
                <Container>
                    <Balance />
                    <Operations /> 
                </Container>
                :
                <WithoutLogin />
            }
            <Footer />
        </div>
    )
}

export default Home