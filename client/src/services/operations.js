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

const getOperations = async (type, category, order = 'des') => {
    try {
        const userId = JSON.parse(localStorage.getItem("user")).dataValues.id
        if (userId) {
            return await axios(`${API_URL}/operations/?userId=${userId}`, { headers: authHeader() }, { type, category, order })
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