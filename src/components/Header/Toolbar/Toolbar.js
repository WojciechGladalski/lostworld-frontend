import React from 'react'
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Submenu from '../NavigationItems/Submenu/Submenu'

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.Header}>
            <div className={classes.Title}>
                <h2>LOST WORLD</h2>
            </div>
            <nav className={classes.NavItems}>
                <NavigationItems isAuth={props.isAuth}/>
            </nav>
            <Submenu/>
        </nav>

    </header>

);

export default toolbar;