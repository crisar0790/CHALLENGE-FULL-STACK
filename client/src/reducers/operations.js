import { GET_BALANCE } from "../actions/types";

const balance = JSON.parse(localStorage.getItem("balance"));

const initialState = balance
    ? { balance }
    : { balance: null };

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_BALANCE:
            return {
                ...state,
                balance: payload.balance
            };
        default:
            return state;
    }
};