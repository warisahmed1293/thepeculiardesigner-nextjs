"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/company';

const Stage2 = () => {
  return (
    <>
    {/* company slider */}
    <section>
        <div className="container mil-p-0-30">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">

                    <div className="mil-mb-60">
                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">Stage 3</span>


                        <h2 className="mil-upper mil-up mil-mb-30">Design details</h2>
                        
                        <p className="mil-up mil-mb-30">After presenting the concept, we dive into the details, ensuring every element is thoughtfully considered. Our team then prepares bespoke cabinetry drawings, joinery and hardware specifications, plumbing plans, lighting design, and electrical layouts to finalise your proposal</p>
                       
                        {/* {Data.signature != undefined &&
                        <div className="row align-items-center mil-up">
                            <div className="col-lg-5 mil-mb-30">
                                <h5 className="mil-upper mil-mb-10">{Data.signature.name}</h5>
                                <p>{Data.signature.subname}</p>
                            </div>
                           
                        </div>
                        } */}
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        <div
                            {...SliderProps.milIllustrationSlider}
                            className="swiper-container mil-illustration-slider"
                        >
                                
                                <div className="swiper-slide">
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src='https://dcfwfuaf91uza.cloudfront.net/residential/lp/wp-content/uploads/sites/2/Bachelor-of-Science-in-Interior-Design.jpg'/>
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                        {/* <div className="mil-illustration-slider-nav mil-up">
                            <div className="mil-nav-buttons">
                                <div className="mil-slider-button mil-illustration-prev">Prev</div>
                                <div className="mil-slider-button mil-illustration-next">Next</div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* company slider end */}
    </>
  );
};
export default Stage2;
