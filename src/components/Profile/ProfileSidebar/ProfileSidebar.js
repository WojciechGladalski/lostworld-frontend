import React from 'react';
import classes from "./ProfileSidebar.module.css";
import ProfilePhoto from '../../../assets/images/gruzja.jpg'

const profileSidebar = props => (
    <nav className={classes.Sidebar}>
        <div className={classes.ProfilePhoto}>
            <img src={ProfilePhoto}/>
        </div>
        <div className={classes.Motto}><span>"Bez ryzyka nie ma zabawy"</span></div>
        <div className={classes.UserInfo}>Informacje o użytkowniku</div>
        <div className={classes.Friends}>Box ze znajomymi</div>
    </nav>
);

export default profileSidebar;
