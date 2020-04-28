import React from 'react';
import classes from './Profile.module.css'
import Aux from '../../hoc/AuxComponent/AuxComponent';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';

const profile = props => (
    <Aux>
        <ProfileSidebar/>
        <div className={classes.ProfileContent}>
            <div style={{margin: '-10px 0 0 -40px'}}>
                <ul className={classes.ProfileMenu}>
                    <li>Mapa</li>
                    <li>Plany podróży</li>
                    <li>Miejsca</li>
                    <li>Zdjęcia</li>
                    <li>Artykuły</li>
                    <li>Znajomi</li>
                    <li>Panel administratora</li>
                </ul>
            </div>
            <div className={classes.TravelPlans}>
                <h3>MOJE PLANY PODRÓŻY</h3><a href="addTravelPlan">(dodaj)</a>
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
                <h3>MOJE ALBUMY</h3><a href="/addAlbum">(dodaj)</a>
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