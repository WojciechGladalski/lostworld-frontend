import React, {useState, useEffect} from 'react';
import classes from './ProfileFollowingUsers.module.css'
import axios from 'axios';
import {API_URL} from '../../../shared/constants';

const ProfilefollowingUsers = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchJson = async () => {
            const response = await axios({
                method: 'get',
                url: `${API_URL}/users/getObservedUsers`,
                headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
            }).then(function (response) {
                //handle success
                console.log(response);
                return response;
            })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
            console.log(response.data)
            setData(response.data)
        };
        fetchJson();
    }, []);
    return (
        <div className={classes.Following}>
            <h3>OBSERWOWANI UŻYTKOWNICY</h3>
            <div>
                <ul>
                    {data.map(item => (
                        <li>
                            {item.username}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ProfilefollowingUsers;