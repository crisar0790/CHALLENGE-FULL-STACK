import { GET_BALANCE } from "./types";
import opService from '../services/operations';

export const getBalance = () => async (dispatch) => {
    return await opService.getBalance()
        .then((response) => {
            dispatch({
                type: GET_BALANCE,
                payload: response.data.totalOperation
            })
        })
}