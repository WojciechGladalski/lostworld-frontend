import React from 'react';
import classes from './Footer.module.css';
import SocialMediaBar from './SocialMediaBar/SocialMediaBar';

const footer = () => (
    <footer className={classes.Footer}>
        <SocialMediaBar height='80%'/>
        <div className={classes.Copyright}>
            <p><strong>Copyright © 2020 LostWorldTravels</strong></p>
        </div>
    </footer>
);

export default footer;