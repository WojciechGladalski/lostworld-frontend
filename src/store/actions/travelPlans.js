import * as actionTypes from './actionTypes';
import axios from "axios";
import {API_URL} from "../../shared/constants";

export const fetchTravelPlansStart = () => {
    return {
        type: actionTypes.FETCH_TRAVEL_PLANS_START
    }
}

export const fetchTravelPlansSuccess = (users) => {
    return {
        type: actionTypes.FETCH_TRAVEL_PLANS_SUCCESS,
        followingUsers: users
    }
}

export const fetchTravelPlansFail = (error) => {
    return {
        type: actionTypes.FETCH_TRAVEL_PLANS_FAIL,
        error: error
    }
}

export const fetchTravelPlans = () => {
    return async dispatch => {
        dispatch(fetchTravelPlansStart());

        await axios({
            method: 'get',
            url: `${API_URL}/users/getTravelPlans`,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }).then(function (response) {
            //handle success
            console.log(response);
            return response;
            // dispatch(fetchTravelPlansSuccess(response.data));
        })
            .catch(err => {
                dispatch(fetchTravelPlansFail(err.response.data.error))
            });
    }
}