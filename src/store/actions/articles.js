import * as actionTypes from './actionTypes';
import axios from "axios";
import {API_URL} from "../../shared/constants";

export const fetchArticlesStart = () => {
    return {
        type: actionTypes.FETCH_ARTICLES_START
    }
}

export const fetchArticlesSuccess = (articles) => {
    return {
        type: actionTypes.FETCH_ARTICLES_SUCCESS,
        articles: articles
    }
}

export const fetchArticlesFail = (error) => {
    return {
        type: actionTypes.FETCH_ARTICLES_FAIL,
        error: error
    }
}

export const fetchArticles = () => {
    return async dispatch => {
        dispatch(fetchArticlesStart());

        await axios({
            method: 'get',
            url: `${API_URL}/articles/checkAllForLoggedUser`,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }).then(function (response) {
            //handle success
            console.log(response);
            return response;
            // dispatch(fetchTravelPlansSuccess(response.data));
        }).catch(err => {
                dispatch(fetchArticlesFail(err.response.data.error))
            });
    }
}