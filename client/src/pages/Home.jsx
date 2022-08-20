import React, { useEffect } from 'react'
import Balance from '../components/Balance';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WithoutLogin from '../components/WithoutLogin';
import styled from 'styled-components';
import LastOpertions from '../components/LastOpertions';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, getLastOperations } from '../actions/operations';

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
    const {balance} = useSelector(state => state.operations);
    const {lastOperations} = useSelector(state => state.operations);

    useEffect(() => {
        if (user) {
            dispatch(getBalance());
            dispatch(getLastOperations());
        }
    },[dispatch]);

    return (
        <div>
            <Navbar />
            {
                user ?
                    <Container>
                        <Balance balance={balance} />
                        <LastOpertions lastOperations={lastOperations} />
                    </Container>
                    :
                    <WithoutLogin />
            }
            <Footer />
        </div>
    )
}

export default Home