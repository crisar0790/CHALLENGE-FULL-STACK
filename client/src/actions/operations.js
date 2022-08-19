import { GET_BALANCE, GET_LAST_OPERATIONS } from "./types";
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