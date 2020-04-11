import React, {Component} from 'react';
import classes from './LostWorld.module.css';
// import backgroundImage from '../../assets/images/background.jpg';
import MainCarousel from '../../components/UI/Carousel/MainCarousel'

class LostWorld extends Component {
    render() {
        return (
            <div className={classes.LostWorld}>
                {/*<img src={backgroundImage} alt='landscape'/>*/}
                <div className={classes.Carousel}>
                    <MainCarousel/>
                </div>

                <div>

                </div>
            </div>
        );
    }
}

export default LostWorld;