import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WithoutLogin from '../components/WithoutLogin';

const Home = () => {
    const user = false;
    return (
        <div>
            <Navbar />
            {
                user ?
                null :
                <WithoutLogin />
            }
            <Footer />
        </div>
    )
}

export default Home