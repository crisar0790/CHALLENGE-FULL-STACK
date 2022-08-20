import { GET_BALANCE, GET_CATEGORIES, GET_LAST_OPERATIONS, GET_TYPES } from "./types";
import opService from '../services/operations';

export const getBalance = () => async (dispatch) => {
    return await opService.getBalance()
        .then((data) => {
            dispatch({
                type: GET_BALANCE,
                payload: {balance: data}
            })
        })
};

export const getLastOperations = () => async (dispatch) => {
    return await opService.getLastOperations()
        .then((data) => {
            dispatch({
                type: GET_LAST_OPERATIONS,
                payload: {lastOperations: data}
            })
        })
};

export const getTypes = () => async (dispatch) => {
    return await opService.getTypes()
        .then((data) => {
            dispatch({
                type: GET_TYPES,
                payload: {types: data}
            })
        })
};

export const getCategories = () => async (dispatch) => {
    return await opService.getCategories()
        .then((data) => {
            dispatch({
                type: GET_CATEGORIES,
                payload: {categories: data}
            })
        })
};