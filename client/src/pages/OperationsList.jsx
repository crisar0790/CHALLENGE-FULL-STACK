import React from 'react';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Operations from '../components/Operations';
import Balance from '../components/Balance';

const OperationsList = () => {
  return (
    <div>
        <Navbar />
        <Balance />
        <Filters />
        <Operations />
        <Footer />
    </div>
  )
}

export default OperationsList