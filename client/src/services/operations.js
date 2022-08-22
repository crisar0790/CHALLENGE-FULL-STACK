import axios from "axios";
import authHeader from './headers';

const API_URL = process.env.REACT_APP_BASE_URL;

const getBalance = async () => {
    try {
        const userId = JSON.parse(localStorage.getItem("user")).dataValues.id
        if (userId) {
            return await axios(`${API_URL}/operations/balance?userId=${userId}`, { headers: authHeader() })
                .then((response) => response.data);
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
                .then((response) => response.data);
        }
    } catch (error) {
        console.log(error)
    }
};

async function getOperations (type, category, order) {
    try {
        const userId = JSON.parse(localStorage.getItem("user")).dataValues.id
        if (userId && type === '' && category === '' && order) {
            return await axios(`${API_URL}/operations/?userId=${userId}&order=${order}`, { headers: authHeader() })
                .then((response) => response.data);
        } else if (userId && type && category === '' && order === '') {
            return await axios(`${API_URL}/operations/?userId=${userId}&type=${type}`, { headers: authHeader() })
                .then((response) => response.data);
        } else if (userId && type === '' && category && order === '') {
            return await axios(`${API_URL}/operations/?userId=${userId}&category=${category}`, { headers: authHeader() })
                .then((response) => response.data);
        } else if (userId && type && category && order === '') {
            return await axios(`${API_URL}/operations/?userId=${userId}&type=${type}&category=${category}`, { headers: authHeader() })
                .then((response) => response.data);
        } else if (userId && type && category === '' && order) {
            return await axios(`${API_URL}/operations/?userId=${userId}&type=${type}&order=${order}`, { headers: authHeader() })
                .then((response) => response.data);
        } else if (userId && type === '' && category && order) {
            return await axios(`${API_URL}/operations/?userId=${userId}&category=${category}&order=${order}`, { headers: authHeader() })
                .then((response) => response.data);
        } else if (userId && type && category && order) {
            return await axios(`${API_URL}/operations/?userId=${userId}&type=${type}&category=${category}&order=${order}`, { headers: authHeader() })
                .then((response) => response.data);
        } 
    } catch (error) {
        console.log(error)
    }
};
    
const getTypes = async () => {
    try {
        return await axios(`${API_URL}/types/`)
            .then((response) => response.data);
    } catch (error) {
        console.log(error)
    }
};

const getCategories = async () => {
    try {
        return await axios(`${API_URL}/categories/`)
            .then((response) => response.data);
    } catch (error) {
        console.log(error)
    }
};

export default {
    getBalance,
    getLastOperations,
    getOperations,
    getTypes,
    getCategories
};