import * as actionTypes from './actionTypes';
import axios from "axios";
import {API_URL} from "../../shared/constants";

export const fetchFollowingUsersStart = () => {
    return {
        type: actionTypes.FETCH_FOLLOWING_USERS_START
    }
}

export const fetchFollowingUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_FOLLOWING_USERS_SUCCESS,
        followingUsers: users
    }
}

export const fetchFollowingUsersFail = (error) => {
    return {
        type: actionTypes.FETCH_FOLLOWING_USERS_FAIL,
        error: error
    }
}

export const fetchFollowingUsers = () => {
    return async dispatch => {
        dispatch(fetchFollowingUsersStart());

        await axios({
            method: 'get',
            url: `${API_URL}/users/getObservedUsers`,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }).then(function (response) {
            //handle success
            console.log(response);
            return response;
            //TODO sprawdzić, czy poniższe rozwiązanie zadziała
            // dispatch(fetchFollowingUsersSuccess(response.data));
        })
            .catch(err => {
                dispatch(fetchFollowingUsersFail(err.response.data.error))
            });
    }
}