import React from 'react';
import {connect} from "react-redux";
import classes from "./ArticlesProfile.module.css";
import * as actions from '../../../store/actions/index'
import Spinner from '../../UI/Spinner/Spinner';

const ArticlesProfile = () => (
    <div className={classes.Articles}>
        <h3>MOJE ARTYKUŁY</h3><a href="addArticle">(dodaj)</a>
        <div></div>
    </div>
)

export default ArticlesProfile;