import axios from "axios";
const API_URL = process.env.REACT_APP_BASE_URL;

const userId = JSON.parse(localStorage.getItem("user")).dataValues.id

const getBalance = async () => {
    return await axios(`${API_URL}/operations/balance?userId=${userId}`)
        .then((response) => response.data)
}

export default {
    getBalance
};