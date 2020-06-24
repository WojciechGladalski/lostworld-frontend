import * as actionTypes from './actionTypes';
import axios from "axios";
import {API_URL} from "../../shared/constants";

export const fetchAlbumsStart = () => {
    return {
        type: actionTypes.FETCH_ALBUMS_START
    };
};

export const fetchAlbumsSuccess = (albums) => {
    return {
        type: actionTypes.FETCH_ALBUMS_SUCCESS,
        albums: albums
    };
};

export const fetchAlbumsFail = (err) => {
    return {
        type: actionTypes.FETCH_ALBUMS_FAIL,
        error: err
    };
};

export const fetchAlbums = () => {
    return async dispatch => {
        dispatch(fetchAlbumsStart());

        await axios({
            method: 'get',
            url: `${API_URL}/users/getAlbums`,
            headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')}
        }).then(function (response) {
            console.log(response)
            dispatch(fetchAlbumsSuccess(response.data))
        }).catch(err => {
            dispatch(fetchAlbumsFail(err.response.data.error))
        })
    }
}