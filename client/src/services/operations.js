import axios from "axios";
import authHeader from './headers';

const API_URL = process.env.REACT_APP_BASE_URL;

const getBalance = async () => {
    try {
        const userId = JSON.parse(localStorage.getItem("user")).dataValues.id
        if (userId) {
            return await axios(`${API_URL}/operations/balance?userId=${userId}`, { headers: authHeader() })
                .then((response) => response.data)
        }

    } catch (error) {
        console.log(error)
    }
};

const getLastOperations = async () => {
    try {
        const userId = JSON.parse(localStorage.getItem("user")).dataValues.id
        if (userId) {
            return await axios(`${API_URL}/operations/?userId=${userId}&qNew=true`, { headers: authHeader() })
                .then((response) => response.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export default {
    getBalance,
    getLastOperations
};