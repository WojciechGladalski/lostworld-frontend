import React from 'react';
import classes from './CountryHeader.module.css';
import icelandFlag from '../../assets/images/iceland-flag.png';
import icelandLandscape from '../../assets/images/iceland-landscape.jpg';

const CountryHeader = () => (
    <div className={classes.MainContainer}>
        <div className={classes.FlagContainer}>
            <img className={classes.Flag} src={icelandFlag}/>
        </div>
        <div className={classes.LandscapeContainer}>
            {/*<img className={classes.Landscape} src={icelandLandscape}/>*/}
        </div>
    </div>

)

export default CountryHeader;