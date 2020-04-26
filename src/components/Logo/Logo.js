import React from 'react';
import logoImage from '../../assets/images/Earth.gif';
import classes from './Logo.module.css';

const logo = (props) => (
    <a href="/" className={classes.Logo}>
        <img className={classes.Image} src={logoImage} alt='Logo'/>
    </a>

);

export default logo;