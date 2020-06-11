import React from 'react';
import classes from './Profile.module.css'
import Aux from '../../hoc/AuxComponent/AuxComponent';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import TravelPlansProfile from "../TravelPlans/TravelPlansProfile";
import ArticlesProfile from "../Articles/ArticlesProfile";
import AlbumsProfile from "../Albums/AlbumsProfile";
import FollowingUsersProfile from "./Following/FollowingUsersProfile";

const profile = props => (
    <Aux>
        <ProfileSidebar/>
        <div className={classes.ProfileContent}>
            <ProfileMenu/>
            <TravelPlansProfile/>
            <div className={classes.Map}>
                <h3>ODWIEDZONE KRAJE (MAPA)</h3>
                <div></div>
            </div>
            <AlbumsProfile/>
            <ArticlesProfile/>
            <FollowingUsersProfile/>
        </div>
        {/*<div style={{clear: 'both'}}></div>*/}

    </Aux>

);

export default profile;