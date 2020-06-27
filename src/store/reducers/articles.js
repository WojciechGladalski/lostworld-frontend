import {updateObject} from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    articles: [],
    loading: false
}

const fetchArticlesStart = (state) => {
    return updateObject(state, {loading: true});
};

const fetchArticlesSuccess = (state, action) => {
    return updateObject(state, {articles: action.articles});
};

const fetchArticlesFail = (state) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ARTICLES_START:
            return fetchArticlesStart(state);
        case actionTypes.FETCH_ARTICLES_SUCCESS:
            return fetchArticlesSuccess(state, action);
        case actionTypes.FETCH_ARTICLES_FAIL:
            return fetchArticlesFail(state);
        default:
            return state;
    }
}

export default reducer;