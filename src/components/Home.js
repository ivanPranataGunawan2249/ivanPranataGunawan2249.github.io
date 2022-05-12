import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

function Home() {
  return (
    <div id='home' className='home'>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carousel"
                    src="./images/background1.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption className='carousel-caption d-flex flex-column justify-content-center h-100'>
                    {/* <div className='row'>
                        <div className='col-2'>
                            
                        </div>
                        <div className='col-10 caption'>
                            <h3>Hi, I am Ivan Pranata Gunawan</h3>
                            <p>I am a Frontend Programmer.</p>
                        </div>
                    </div> */}
                    <img
                        className="profile-picture img-fluid"
                        src="./images/profilePicture.jpg"
                    />

                    <div className='caption'>
                        <h3>Hi, I am Ivan Pranata Gunawan</h3>
                        <p>I am a Frontend Programmer.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carousel"
                    src="./images/background2.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption className='carousel-caption2 d-flex flex-column justify-content-center h-100'>
                    <h3>Hi, I am Ivan Pranata Gunawan. <br/>Now I am Frontend Programmer at Codify (MacroAd). <br/>I am interested in web and mobile programming.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Home