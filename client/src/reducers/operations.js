import { CLEAR_DATA, CREATE_OPERATION, DELETE_OPERATION, EDIT_OPERATION, GET_BALANCE, GET_CATEGORIES, GET_LAST_OPERATIONS, GET_OPERATIONS, GET_TYPES } from "../actions/types";

const initialState = {
    balance: {},
    lastOperations: [],
    operations: [],
    types: [],
    categories: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_BALANCE:
            return {
                ...state,
                balance: payload.balance
            };
        case GET_LAST_OPERATIONS:
            return {
                ...state,
                lastOperations: payload.lastOperations
            };
        case GET_OPERATIONS:
            return {
                ...state,
                operations: payload.operations
            };
        case GET_TYPES:
            return {
                ...state,
                types: payload.types
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload.categories
            };
        case CREATE_OPERATION:
            return {
                ...state
            };
        case EDIT_OPERATION:
            return {
                ...state
            };
        case DELETE_OPERATION:
            return {
                ...state
            };
        case CLEAR_DATA:
            return {
                initialState
            }
        default:
            return state;
    }
};