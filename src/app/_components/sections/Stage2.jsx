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
                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">Stage 2</span>

                        <h2 className="mil-upper mil-up mil-mb-30">Design Development</h2>
                        <h4 className="mil-upper mil-up mil-mb-10">- Concept</h4>
                        <p className="mil-up mil-mb-30">Our vision is to design interiors that are not only visually stunning, but also enhance the lives of those who use them. The Peculiar Designer is committed to creating spaces that are as unique as our clients.</p>
                        <h4 className="mil-upper mil-up mil-mb-10">- Detail</h4>
                        <p className="mil-up mil-mb-40">Expert consultation services in web development, mobile apps, CMS customization, and Shopify solutions. We provide tailored strategies, actionable insights, and personalized guidance to launch, optimize, or scale your projects, ensuring seamless execution and transforming your vision into reality.</p>
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
export default Stage2;
