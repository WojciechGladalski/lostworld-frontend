import * as actionTypes from './actionTypes';
import axios from "axios";
import {API_URL} from '../../shared/constants';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.clear();
    // window.location.href = '/';
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const login = (username, password) => {
    return dispatch => {
        dispatch(authStart());

        const loginData = {
            username: username,
            password: password,
        };

        axios({
            method: 'post',
            url: API_URL + '/users/login',
            data: loginData
        })
            .then(function (response) {
                //handle success
                console.log(response);

                localStorage.setItem('token', response.data.accessToken);

                dispatch(authSuccess(response.data.accessToken));
                window.location.href = '/';
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };
};

export const register = (registerData) => {
    return dispatch => {
        dispatch(authStart());

        axios({
            method: 'post',
            url: API_URL + "/users/register",
            data: registerData
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            })
    }
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }
    }
};