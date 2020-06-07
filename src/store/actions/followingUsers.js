import * as actionTypes from './actionTypes';

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

}