import React from 'react';
import classes from './Profile.module.css'
import Aux from '../../hoc/AuxComponent/AuxComponent';

const profile = props => (
    <Aux>
        <nav className={classes.Sidebar}>
            <div className={classes.ProfilePhoto}>Zdjęcie profilowe</div>
            <div className={classes.Motto}>Motto</div>
            <div className={classes.UserInfo}>Informacje o użytkowniku</div>
            <div className={classes.Friends}>Box ze znajomymi</div>
        </nav>
        <div className={classes.ProfileContent}>
            <div>
                <ul className={classes.ProfileMenu}>
                    <li>Menu 1</li>
                    <li>Menu 2</li>
                    <li>Menu 3</li>
                    <li>Menu 4</li>
                    <li>Menu 5</li>
                    <li>Menu 6</li>
                </ul>
            </div>
            <div className={classes.TravelPlans}>
                <h2>Moje plany podróży</h2>
                <div>
                    <ul>
                        <li>Plan 1</li>
                        <li>Plan 2</li>
                        <li>Plan 3</li>
                    </ul>
                </div>
            </div>
            <div>Odwiedzone kraje (mapa)</div>
            <div>Moje albumy</div>
            <div>Moje artykuły</div>
            <div>Obserwowani użytkownicy</div>
        </div>
        <div style={{clear: 'both'}}></div>

    </Aux>

);

export default profile;