import React from 'react';
import classes from "./ProfileSidebar.module.css";

const profileSidebar = props => (
    <nav className={classes.Sidebar}>
        <div className={classes.ProfilePhoto}>Zdjęcie profilowe</div>
        <div className={classes.Motto}>Motto</div>
        <div className={classes.UserInfo}>Informacje o użytkowniku</div>
        <div className={classes.Friends}>Box ze znajomymi</div>
    </nav>
);

export default profileSidebar;