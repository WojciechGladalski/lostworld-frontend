import React from 'react';
import classes from './Submenu.module.css';

const submenu = (props) => (

    <nav className={classes.Submenu}>
        <ul>
            <li><a href='/'>START</a></li>
            <li><a href='/forum'>FORUM</a></li>
            <li><a href='/countries'>KRAJE</a></li>
            <li><a href='/articles'>ARTYKUŁY</a></li>
            <li><a href='/photos'>FOTORELACJE</a></li>
            <li><a href='/contact'>KONTAKT</a></li>
            <li style={{borderRight: '0px'}}><a href='/travelPlan'>PLANER WYPRAW</a></li>
        </ul>
    </nav>
);

export default submenu;