import React, { useEffect, useState } from 'react'

export const FirstSection = () => {

    return (

        <section id="slider"
            className="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-100 include-header">
            <div className="slider-inner">

                <div className="swiper-container swiper-parent">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide dark">
                            <div className="container">
                                <div className="slider-caption slider-caption-center">
                                    <h2 data-animate="fadeInUp">Welcome to Canvas</h2>
                                    <p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">Create just
                                        what you need for your Perfect Website. Choose from a wide range of Elements
                                        &amp; simply put them on your own Canvas.</p>
                                </div>
                            </div>
                            <div className="swiper-slide-bg" style={{ backgroundImage: 'url(src/images/slider/swiper/1.jpg)' }}>
                            </div>
                        </div>
                        <div className="swiper-slide dark">
                            <div className="container">
                                <div className="slider-caption slider-caption-center">
                                    <h2 data-animate="fadeInUp">Beautifully Flexible</h2>
                                    <p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">Looks
                                        beautiful &amp; ultra-sharp on Retina Screen Displays. Powerful Layout with
                                        Responsive functionality that can be adapted to any screen size.</p>
                                </div>
                            </div>
                            <div className="video-wrap">
                                <video id="slide-video" poster="src/images/videos/explore-poster.jpg" preload="auto" loop
                                    autoPlay muted>
                                    <source src='src/images/videos/explore.webm' type='video/webm' />
                                    <source src='src/images/videos/explore.mp4' type='video/mp4' />
                                </video>
                                <div className="video-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}></div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="container">
                                <div className="slider-caption">
                                    <h2 data-animate="fadeInUp">Great Performance</h2>
                                    <p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">You'll be
                                        surprised to see the Final Results of your Creation &amp; would crave for more.
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide-bg"
                                style={{ backgroundImage: 'url(src/images/slider/swiper/3.jpg)', backgroundPosition: 'center top' }}>
                            </div>
                        </div>
                    </div>
                    <div className="slider-arrow-left"><i className="icon-angle-left"></i></div>
                    <div className="slider-arrow-right"><i className="icon-angle-right" ></i></div>
                </div>

                <a href="#" data-scrollto="#content" data-offset="100" className="one-page-arrow dark"><i
                    className="icon-angle-down infinite animated fadeInDown"></i></a>

            </div>
        </section>
    )
}
