import React from 'react';
import classes from './AlbumsProfile.module.css';
import AddPhotoForm from "../Forms/AddPhotoForm";

const AlbumsProfile = () => (
    <div className={classes.Albums}>
        {/*<h3>MOJE ALBUMY</h3><a href="/test">(dodaj)</a>*/}
        <AddPhotoForm/>
        <div></div>
    </div>
)

export default AlbumsProfile;
