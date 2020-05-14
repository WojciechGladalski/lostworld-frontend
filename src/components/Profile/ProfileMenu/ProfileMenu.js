import React from 'react';
import classes from "./ProfileMenu.module.css";

const ProfileMenu = () => (
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
)

export default ProfileMenu;