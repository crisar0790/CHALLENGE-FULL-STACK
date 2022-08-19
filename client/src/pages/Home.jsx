import React, { useEffect } from 'react'
import Balance from '../components/Balance';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WithoutLogin from '../components/WithoutLogin';
import styled from 'styled-components';
import LastOpertions from '../components/LastOpertions';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance } from '../actions/operations';

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
    const dispatch = useDispatch();
    const balance = useSelector(state => state.balance);

    useEffect(() => {
        if (user) {
            dispatch(getBalance());
        }
    },[user, dispatch]);

    return (
        <div>
            <Navbar />
            {
                user ?
                    <Container>
                        <Balance balance={balance} />
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