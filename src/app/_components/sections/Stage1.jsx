"use client";
import React from "react";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/company-2';

import Link from "next/link";

const Stage1 = () => {
  return (
    <>
    {/* company two slider */}
    <section>
        <div className="container mil-p-0-30">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">Stage 1</span>
                        <h2 className="mil-upper mil-up mil-mb-30">Consultation</h2>
                        <p className="mil-up mil-mb-40">After your initial enquiry, we’ll give you a phone call to understand your project better. 
<br/>
<br/>

Next, we’ll schedule a home consultation, which usually lasts 90 to 120 minutes and comes with a small fee. This is an important step for us to get to know you, your lifestyle, and your vision for the space. We’ll listen closely to your hopes and ideas, as understanding your needs is key to a successful design outcome.
<br/>
<br/>

This is also a chance for you to get to know us. A strong working relationship is crucial, and we want you to feel confident and comfortable with your choice of designer.
<br/>
<br/>

During the consultation, we’ll take measurements, discuss your budget, and go over preferred timelines.
<br/>
<br/>

Afterwards, we’ll send you a proposal outlining the project scope, timeline, budget estimate, and any design or project management fees</p>
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
    {/* company two slider end */}
    </>
  );
};
export default Stage1;
