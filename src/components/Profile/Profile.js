import React from 'react';
import AddPhotoForm from '../Forms/AddPhotoForm';
import classes from './Profile.module.css'
import Aux from '../../hoc/AuxComponent/AuxComponent';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import TravelPlans from "../TravelPlans/TravelPlans";
import ArticlesProfile from "../Articles/ArticlesProfile";
import ProfilefollowingUsers from "./Following/ProfileFollowingUsers";

const profile = props => (
    <Aux>
        <ProfileSidebar/>
        <div className={classes.ProfileContent}>
            <ProfileMenu/>
            <TravelPlans/>
            <div className={classes.Map}>
                <h3>ODWIEDZONE KRAJE (MAPA)</h3>
                <div></div>
            </div>
            <div className={classes.Albums}>
                {/*<h3>MOJE ALBUMY</h3><a href="/test">(dodaj)</a>*/}
                <AddPhotoForm/>
                <div></div>
            </div>
            <ArticlesProfile/>
            <ProfilefollowingUsers/>
        </div>
        {/*<div style={{clear: 'both'}}></div>*/}

    </Aux>

);

export default profile;