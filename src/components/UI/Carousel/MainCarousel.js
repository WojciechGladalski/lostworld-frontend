import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default class MainCarousel extends React.Component {

    render() {
        return (
            <div className={'my-carousel'}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../../../assets/images/africa-image-1.png')}
                            alt="First slide"
                            style={{maxHeight: '500px', maxWidth: '800px'}}
                        />
                        <Carousel.Caption>
                            <h3>Dzika Afryka</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../../../assets/images/rome-image-1.jpg')}
                            alt="Third slide"
                            style={{maxHeight: '450px', maxWidth: '800px'}}
                        />

                        <Carousel.Caption>
                            <h3>Pewnego razu w Rzymie</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../../../assets/images/thailand-image-1.jpg')}
                            alt="Third slide"
                            style={{maxHeight: '500px', maxWidth: '800px'}}
                        />

                        <Carousel.Caption>
                            <h3>Rajska Tajlandia</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}