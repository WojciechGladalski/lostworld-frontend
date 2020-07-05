import React, {useEffect} from 'react';
import {connect} from "react-redux";
import classes from "./ArticlesProfile.module.css";
import * as actions from '../../../store/actions/index'
import Spinner from '../../UI/Spinner/Spinner';

const ArticlesProfile = props => {

    const {onFetchArticles} = props;
    useEffect(() => {
        onFetchArticles();
    }, [onFetchArticles])

    let articles = <Spinner/>

    if (!props.loading) {
        articles = props.articles.map(art => (
            <li>
                {art.articles}
            </li>
        ))
    }

    return (

        <div className={classes.Articles}>
            <h3>MOJE ARTYKUŁY</h3><a href="addArticle">(dodaj)</a>
            <div>
                <ul>
                    {articles}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles.articles,
        loading: state.articles.articles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchArticles: () => dispatch(actions.fetchArticles())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesProfile);