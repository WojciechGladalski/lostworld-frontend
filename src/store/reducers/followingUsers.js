import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility'

const initialState = {
    followingUsers: [],
    loading: false
}

const fetchCountriesStart = (state) => {
    return updateObject(state, {loading: true});
};

const fetchCountriesSuccess = (state, action) => {
    return updateObject(state, {followingUsers: action.followingUsers})
}

const fetchCountriesFail = (state, action) => {
    return updateObject(state, {loading: false})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FOLLOWING_USERS_START:
            return fetchCountriesStart(state, action);
        case actionTypes.FETCH_FOLLOWING_USERS_SUCCESS:
            return fetchCountriesSuccess(state, action);
        case actionTypes.FETCH_FOLLOWING_USERS_FAIL:
            return fetchCountriesFail(state, action);
        default:
            return state;
    }
}

export default reducer;