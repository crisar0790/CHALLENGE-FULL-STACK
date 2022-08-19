import { GET_BALANCE, GET_LAST_OPERATIONS } from "../actions/types";

const initialState = {
    balance: {},
    lastOperations: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_BALANCE:
            return {
                ...state,
                balance: payload
            };
        case GET_LAST_OPERATIONS:
            return {
                ...state,
                lastOperations: payload
            }
        default:
            return state;
    }
};