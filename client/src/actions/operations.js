import { GET_BALANCE, GET_CATEGORIES, GET_LAST_OPERATIONS, GET_TYPES, GET_OPERATIONS, DELETE_OPERATION, CREATE_OPERATION } from "./types";
import opService from '../services/operations';

export const getBalance = () => async (dispatch) => {
    return await opService.getBalance()
        .then((data) => {
            dispatch({
                type: GET_BALANCE,
                payload: { balance: data }
            })
        })
};

export const getLastOperations = () => async (dispatch) => {
    return await opService.getLastOperations()
        .then((data) => {
            dispatch({
                type: GET_LAST_OPERATIONS,
                payload: { lastOperations: data }
            })
        })
};

export const getOperations = (type = '', category = '', order = 'des') => async (dispatch) => {
    return await opService.getOperations(type, category, order)
        .then((data) => {
            dispatch({
                type: GET_OPERATIONS,
                payload: { operations: data }
            })
        })
};

export const getTypes = () => async (dispatch) => {
    return await opService.getTypes()
        .then((data) => {
            dispatch({
                type: GET_TYPES,
                payload: { types: data }
            })
        })
};

export const getCategories = () => async (dispatch) => {
    return await opService.getCategories()
        .then((data) => {
            dispatch({
                type: GET_CATEGORIES,
                payload: { categories: data }
            })
        })
};

export const deleteOperation = (id) => async (dispatch) => {
    return await opService.deleteOperation(id)
        .then((data) => {
            dispatch({
                type: DELETE_OPERATION
            })
        })
};

export const createOperation = (concept, amount, date, type, category) => async (dispatch) => {
    return await opService.createOperation(concept, amount, date, type, category)
        .then((data) => {
            dispatch({
                type: CREATE_OPERATION,
                payload: { operations: data }
            })
        })
};