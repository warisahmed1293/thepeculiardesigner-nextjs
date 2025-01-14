"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/company';

const Stage4 = () => {
  return (
    <>
    {/* company slider */}
    <section>
        <div className="container mil-p-0-30">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">

                    <div className="mil-mb-60">
                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">Stage 4</span>
                        <h2 className="mil-upper mil-up mil-mb-30">The build</h2>
                    <p className="mil-up mil-mb-30">Our in-house construction team is ready to bring your vision to life. Rest assured, we ensure that design and construction are always perfectly aligned. You won’t need to worry about electrical plans or intricate joinery details – we’ve got it all covered for you. </p>
                        <h4 className="mil-upper mil-up mil-mb-10">- Construction</h4>
                        <p className="mil-up mil-mb-30">Our designer and Project Manager will work collaboratively to ensure this stage progresses seamlessly, addressing and resolving any issues that may arise promptly.</p>
                       
                        <h4 className="mil-upper mil-up mil-mb-10">- Styling</h4>
                        <p className="mil-up mil-mb-40">Prior to handover day, our team of designers will have carefully curated a selection of luxury accessories and artwork to dress the space. These finishing touches are an integral component part required to complete the beautiful aesthetic.</p>
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
                        <Swiper
                            {...SliderProps.milIllustrationSlider}
                            className="swiper-container mil-illustration-slider"
                        >
                                {Data.items.map((item, key) => (
                                <SwiperSlide className="swiper-slide" key={`illustration-slider-item-${key}`}>
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src={item.image} alt={item.alt} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                ))}
                        </Swiper>
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
export default Stage4;
