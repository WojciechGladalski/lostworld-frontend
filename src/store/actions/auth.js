import * as actionTypes from './actionTypes';
import axios from "axios";

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
    window.location.href = '/';
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());

        const loginData = {
            username: username,
            password: password,
        };

        axios({
            method: 'post',
            url: 'http://b308384c.ngrok.io/users/login',
            data: loginData
        })
            .then(function (response) {
                //handle success
                console.log(response);

                localStorage.setItem('token', response.data.accessToken);

                dispatch(authSuccess(response.data.accessToken))
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }
    }
};