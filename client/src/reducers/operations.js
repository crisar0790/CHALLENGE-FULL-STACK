import { GET_BALANCE, GET_LAST_OPERATIONS, GET_TYPES } from "../actions/types";

const initialState = {
    balance: {},
    lastOperations: [],
    types: []
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
            };
        case GET_TYPES:
            return {
                ...state,
                types: payload
            }
        default:
            return state;
    }
};