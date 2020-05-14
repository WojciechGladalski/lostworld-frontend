import React from 'react';
import AddPhotoForm from '../Forms/AddPhotoForm';
import classes from './Profile.module.css'
import Aux from '../../hoc/AuxComponent/AuxComponent';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import ProfileMenu from "./ProfileMenu/ProfileMenu";


const profile = props => (
    <Aux>
        <ProfileSidebar/>
        <div className={classes.ProfileContent}>
            <ProfileMenu/>
            <div className={classes.TravelPlans}>
                <h3>MOJE PLANY PODRÓŻY</h3><a href="/addTravelPlan">(dodaj)</a>
                <div>
                    <ul>
                        <li>Plan 1</li>
                        <li>Plan 2</li>
                        <li>Plan 3</li>
                    </ul>
                </div>
            </div>
            <div className={classes.Map}>
                <h3>ODWIEDZONE KRAJE (MAPA)</h3>
                <div></div>
            </div>
            <div className={classes.Albums}>
                {/*<h3>MOJE ALBUMY</h3><a href="/test">(dodaj)</a>*/}
                <AddPhotoForm/>
                <div></div>
            </div>
            <div className={classes.Articles}>
                <h3>MOJE ARTYKUŁY</h3><a href="addArticle">(dodaj)</a>
                <div></div>
            </div>
            <div className={classes.Following}>
                <h3>OBSERWOWANI UŻYTKOWNICY</h3>
                <div></div>
            </div>
        </div>
        {/*<div style={{clear: 'both'}}></div>*/}

    </Aux>

);

export default profile;