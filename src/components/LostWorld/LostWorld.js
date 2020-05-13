import React from 'react';
import classes from './LostWorld.module.css';
// import backgroundImage from '../../assets/images/background.jpg';
import MainCarousel from '../UI/Carousel/MainCarousel'
import PopularPlaces from './PopularPlaces/PopularPlaces';
import Aux from '../../hoc/AuxComponent/AuxComponent';

const LostWorld = () => {
    return (
        <Aux>
            <div className={classes.LostWorld}>
                {/*<img src={backgroundImage} alt='landscape'/>*/}
                <div className={classes.Carousel}>
                    <MainCarousel/>
                </div>
                <PopularPlaces/>
            </div>
        </Aux>
    );
}

export default LostWorld;