import {updateObject} from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    albums: [],
    loading: false
}

const fetchAlbumsStart = (state) => {
    return updateObject(state, {loading: true});
};

const fetchAlbumsSuccess = (state, action) => {
    return updateObject(state, {albums: action.albums});
};

const fetchAlbumsFail = (state) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALBUMS_START:
            return fetchAlbumsStart(state);
        case actionTypes.FETCH_ALBUMS_SUCCESS:
            return fetchAlbumsSuccess(state, action);
        case actionTypes.FETCH_ALBUMS_FAIL:
            return fetchAlbumsFail(state);
        default:
            return state;
    }
}

export default reducer;