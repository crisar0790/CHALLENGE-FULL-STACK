import React, { useState, useEffect } from 'react'
import Balance from '../components/Balance';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WithoutLogin from '../components/WithoutLogin';
import styled from 'styled-components';
import LastOpertions from '../components/LastOpertions';
import { useDispatch, useSelector } from 'react-redux';
import { createOperation, deleteOperation, getBalance, getLastOperations } from '../actions/operations';

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
    const { balance } = useSelector(state => state.operations);
    const { lastOperations } = useSelector(state => state.operations);
    const [showAdd, setShowAdd] = useState(false);
    const [concept, setConcept] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [typeAdd, setTypeAdd] = useState('');
    const [categoryAdd, setCategoryAdd] = useState('');

    const [showEdit, setShowEdit] = useState(false);
    const [conceptEdit, setConceptEdit] = useState('');
    const [amountEdit, setAmountEdit] = useState(0);
    const [dateEdit, setDateEdit] = useState('');
    const [categoryEdit, setCategoryEdit] = useState('');

    const handleDelete = (id) => {
        dispatch(deleteOperation(id));
        setTimeout(function () {
            dispatch(getBalance());
            dispatch(getLastOperations());
        }, 1000);
    };

    const handleEdit = (id) => {
        dispatch()
    };

    useEffect(() => {
        if (user) {
            dispatch(getBalance());
            dispatch(getLastOperations());
        }
    }, [dispatch]);

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(createOperation(concept, amount, date, typeAdd, categoryAdd));
        setTimeout(function () {
            dispatch(getBalance());
            dispatch(getLastOperations());
        }, 1000);
    };

    return (
        <div>
            <Navbar />
            {
                user ?
                    <Container>
                        <Balance balance={balance} />
                        <LastOpertions
                            lastOperations={lastOperations}
                            handleDelete={handleDelete}
                            showAdd={showAdd}
                            setShowAdd={setShowAdd}
                            handleAdd={handleAdd}
                            setConcept={setConcept}
                            setAmount={setAmount}
                            setDate={setDate}
                            setTypeAdd={setTypeAdd}
                            setCategoryAdd={setCategoryAdd}
                            handleEdit={handleEdit}
                            showEdit={showEdit}
                            setShowEdit={setShowEdit}
                            conceptEdit={conceptEdit}
                            setConceptEdit={setConceptEdit}
                            amountEdit={amountEdit}
                            setAmountEdit={setAmountEdit}
                            dateEdit={dateEdit}
                            setDateEdit={setDateEdit}
                            categoryEdit={categoryEdit}
                            setCategoryEdit={setCategoryEdit} />
                    </Container>
                    :
                    <WithoutLogin />
            }
            <Footer />
        </div>
    )
}

export default Home