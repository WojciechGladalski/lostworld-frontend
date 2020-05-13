import React from 'react';
import classes from './PopularPlaces.module.css';
import Place1 from '../../../assets/images/old-town-square-prague.jpg'
import Place3 from '../../../assets/images/neuschwenstein.jpg'

const PopularPlaces = () => (
    <section className={classes.PopularPlaces}>
        <h1 className={classes.Title}>Popularne kierunki w tym miesiącu</h1>
        <ul className={classes.PopularPlacesList}>
            <li className={classes.PopularPlacesListItem}>
                <div className={classes.PopularPlacesListItemImage}>
                    <img src={Place1} className={classes.Image}/>
                </div>
                <p className={classes.PopularPlacesListItemDescription}>Praga - Stare Miasto</p>
            </li>
            <li className={classes.PopularPlacesListItem}>
                <div className={classes.PopularPlacesListItemImage}>
                    {/*<img src={Place2} className={classes.Image}/>*/}
                </div>
                <p className={classes.PopularPlacesListItemDescription}>Park Krajobrazowy Adamello-Brenta</p>
            </li>
            <li className={classes.PopularPlacesListItem}>
                <div className={classes.PopularPlacesListItemImage}>
                    <img src={Place3} className={classes.Image}/>
                </div>
                <p className={classes.PopularPlacesListItemDescription}>Zamek Neuschwanstein</p>
            </li>
        </ul>
    </section>
);

export default PopularPlaces;