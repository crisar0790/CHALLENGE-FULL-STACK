import axios from "axios";
import authHeader from './headers';

const API_URL = process.env.REACT_APP_BASE_URL;

const getBalance = async () => {
    try {
        const userId = JSON.parse(localStorage.getItem("user")).dataValues.id
        if (userId) {
            return await axios(`${API_URL}/operations/balance?userId=${userId}`, { headers: authHeader() })
                .then((response) => console.log(response.data))
        }

    } catch (error) {
        console.log(error)
    }
};

export default {
    getBalance
};