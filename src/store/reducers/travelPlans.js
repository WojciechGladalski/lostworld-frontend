import {updateObject} from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    travelPlans: [],
    loading: false
}

const fetchTravelPlansStart = (state) => {
    return updateObject(state, {loading: true});
};

const fetchTravelPlansSuccess = (state, action) => {
    return updateObject(state, {travelPlans: action.plans});
};

const fetchTravelPlansFail = (state) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TRAVEL_PLANS_START:
            return fetchTravelPlansStart(state);
        case actionTypes.FETCH_TRAVEL_PLANS_SUCCESS:
            return fetchTravelPlansSuccess(state, action);
        case actionTypes.FETCH_TRAVEL_PLANS_FAIL:
            return fetchTravelPlansFail(state);
        default:
            return state;
    }
}

export default reducer;