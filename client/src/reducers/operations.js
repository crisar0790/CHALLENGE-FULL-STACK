import { GET_BALANCE, GET_CATEGORIES, GET_LAST_OPERATIONS, GET_TYPES } from "../actions/types";

const initialState = {
    balance: {},
    lastOperations: [],
    types: [],
    categories: []
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
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }
        default:
            return state;
    }
};