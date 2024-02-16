import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Styles/Slider.css";
//
import Title from './Title';
import BestUniversities from './BestUniversities';
import Statistics from './Statistics';
//

function Slider() {
    return (
        <>
            <div className='heroDiv'>
                <div className='wavyBackground'></div>
                <div className='slideImage'>
                    <Carousel className='slide'>
                        <Carousel.Item interval={3000} className='slideCaption' >
                            <div className='slideBody'>
                            <img
                            className="d-block w-100 image"
                            src="university1.jpg"
                            alt="First slide"
                            />
                            </div>
                            <Carousel.Caption >
                                <div className='H1andImage'>
                                    <h1 className='SlideTitle'>
                                        giving you a glimpse into the unique offerings, academic excellence, and vibrant campus life.
                                    </h1>
                                </div>
                            <h3>For Universities</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className='slideCaption' >
                            <div className='slideBody'>
                            <img
                            className="d-block w-100 image"
                            src="students2.jpg"
                            alt="First slide"
                            />
                            </div>
                            <Carousel.Caption >
                                <div className='H1andImage'>
                                    <h1 className='SlideTitle'>
                                        giving you a glimpse into the unique offerings, academic excellence, and vibrant campus life.
                                    </h1>
                                </div>
                            <h3>For Training centers</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className='slideCaption' >
                            <div className='slideBody'>
                            <img
                            className="d-block w-100 image"
                            src="students3.jpg"
                            alt="First slide"
                            />
                            </div>
                            <Carousel.Caption >
                                <div className='H1andImage'>
                                    <h1 className='SlideTitle'>
                                        giving you a glimpse into the unique offerings, academic excellence, and vibrant campus life.
                                    </h1>
                                </div>
                            <h3>For schools</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className='slideCaption'>
                            <div className='slideBody'>
                            <img
                            className="d-block w-100 image"
                            src="administrators1.jpg"
                            alt="First slide"
                            />
                            </div>
                            <Carousel.Caption >
                                <div className='H1andImage'>
                                    <h1 className='SlideTitle'>
                                        giving you a glimpse into the unique offerings, academic excellence, and vibrant campus life.
                                    </h1>
                                </div>
                            <h3>For administrators</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className='slideCaption'>
                            <div className='slideBody'>
                            <img
                            className="d-block w-100 image"
                            src="students1.jpg"
                            alt="First slide"
                            />
                            </div>
                            <Carousel.Caption >
                                <div className='H1andImage'>
                                    <h1 className='SlideTitle'>
                                        giving you a glimpse into the unique offerings, academic excellence, and vibrant campus life.
                                    </h1>
                                </div>
                            <h3>For students</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className='secondSection'>
                <Title title="Best universities" direction="left"/>
                <BestUniversities/>
                <Title title="Statistics" direction="right"/>
                <Statistics/>
            </div>
        </>
    );
}

export default Slider;
