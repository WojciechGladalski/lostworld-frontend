import React from 'react'
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Submenu from '../NavigationItems/Submenu/Submenu'

const toolbar = (props) => (

    <div>
        <header className={classes.Toolbar}>
            <Logo/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems isAuth={props.isAuth}/>
            </nav>

        </header>
        {/*<div>*/}
        {/*    <Submenu/>*/}
        {/*</div>*/}
    </div>
);

export default toolbar;