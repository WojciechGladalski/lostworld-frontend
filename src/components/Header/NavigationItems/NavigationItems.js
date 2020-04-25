import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../hoc/AuxComponent/AuxComponent';
import axios from "axios";

function amisawyer() {
    axios({
        method: 'get',
        url: 'http://fdfb6477.ngrok.io/users/sec',
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    axios({
        method: 'get',
        url: 'http://fdfb6477.ngrok.io/users/check',
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {props.isAuth ? <NavigationItem link="/myProfile">PROFIL</NavigationItem> : null}
        {!props.isAuth
            ? <Aux>
                <NavigationItem link="/login">ZALOGUJ</NavigationItem>
                <NavigationItem link="/register">ZAREJESTRUJ</NavigationItem>
              </Aux>
            : <NavigationItem link="/logout">WYLOGUJ</NavigationItem>}

        {/*<button onClick={amisawyer}>AM I SAWYER?!</button>*/}
    </ul>
);

export default navigationItems;