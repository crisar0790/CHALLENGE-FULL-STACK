import axios from "axios";
const API_URL = process.env.REACT_APP_BASE_URL;

const register = async (firstName, lastName, email, currency, password) => {
    return await axios.post(API_URL + "/auth/register", {
        firstName,
        lastName,
        email,
        currency, 
        password,
    });
};

const login = async (email, password) => {
    return await axios
        .post(`${API_URL}/auth/login`, {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};