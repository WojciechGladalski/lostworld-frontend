import React, {Component} from 'react';
import classes from './LostWorld.module.css';
// import backgroundImage from '../../assets/images/background.jpg';
import MainCarousel from '../../components/UI/Carousel/MainCarousel'
import PopularPlaces from './PopularPlaces/PopularPlaces';
import Aux from '../../hoc/AuxComponent/AuxComponent';

class LostWorld extends Component {
    render() {
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
}

export default LostWorld;