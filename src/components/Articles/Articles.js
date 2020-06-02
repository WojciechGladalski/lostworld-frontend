import React from 'react';
import classes from './Articles.module.css';
import Aux from '../../hoc/AuxComponent/AuxComponent';

const Articles = () => (

    <Aux>
        <h1>
            ARTYKUŁY
        </h1>
        <div className={classes.SelectedArticle}>
            <h2>WYRÓŻNIONY NA DZIŚ</h2>
            <div className={classes.SelectedArticleImage}>
                {/*display: inline-block*/}
                <img/>
            </div>
            <div>
                <h3>Tytuł artykułu</h3>
                <p>Pierwsze zdania (...) ostatnie zdanie... <a>czytaj dalej</a></p>
            </div>
        </div>
        <div className={classes.AddedRecently}>
            <h2>Ostatnio dodane</h2>
            <div>
                <div className={classes.AddedRecentlySingleImage}>
                    <img/>
                </div>
                <h4>TYTUŁ ART.</h4>
                <p>Kraj: {}</p>
            </div>
        {/*    tych divów ma być 6 - po 3 w każdym z dwóch rzędów*/}
        </div>
    </Aux>
)

export default Articles;