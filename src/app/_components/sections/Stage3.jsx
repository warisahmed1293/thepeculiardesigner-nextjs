"use client";
import React from "react";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/company-2';

import Link from "next/link";

const Stage3 = () => {
    return (
        <>
            {/* company two slider */}
            <section>
                <div className="container mil-p-0-30">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-90">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30">Stage 2</span>
                                <h2 className="mil-upper mil-up mil-mb-30">Concept</h2>
                                <p className="mil-up mil-mb-40">"We work with you to explore different materials, textures and colours to create beautiful and functional spaces"

                                </p>
                                <div className="mil-up">
                                    {/* <Link href={Data.button.link} className="mil-link mil-upper">
                                {Data.button.label}
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link> */}
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                                <div
                                    {...SliderProps.milIllustrationSlider}
                                    className="swiper-container mil-illustration-slider"
                                >

                                    <div className="swiper-slide" >
                                        <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                            <div className="mil-image-frame">
                                                <img src='https://leathergallery.co.za/cdn/shop/articles/CONCEPT_VS_THEME_4581db48-dba7-4d1f-b197-c0f1414c6e57_1600x.jpg?v=1652541836' />
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
            {/* company two slider end */}
        </>
    );
};
export default Stage3;
