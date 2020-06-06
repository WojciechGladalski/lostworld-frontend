import React from 'react';
import classes from './ProfileFollowingUsers.module.css'
import axios from 'axios';
import {API_URL} from '../../../shared/constants';

const ProfilefollowingUsers = () => {

    const fetchFollowingUsersList = () => {
        axios({
            method: 'get',
            url: `${API_URL}/users/getObservedUsers`,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }).then(function (response) {
            //handle success
            console.log(response);

            return response[0].username;
        })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    return (
        <div className={classes.Following}>
            <h3>OBSERWOWANI UŻYTKOWNICY</h3>
            <div>
                <ul>
                    <li>{fetchFollowingUsersList}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfilefollowingUsers;