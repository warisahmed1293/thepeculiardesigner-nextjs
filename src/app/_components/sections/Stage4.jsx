import React from "react";

const Stage4 = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <div className="mil-suptitle mil-upper mil-up mil-mb-30">Stage 1</div>
          <h1 className="mil-upper mil-up">Design Development</h1>
          <br />
          <p className="mil-text-sm-stage mil-up mil-dark-soft mil-mb-30">
            At this next stage, we will introduce you to our Project
            Co-ordinator and Project Manager who will ensure your project is
            delivered according to plan.
          </p>
          <br />
          <h1 style={{ fontFamily: "cursive", color: "#4d0606" }}>
            Construction
          </h1>
          <br />
          <br />
          <p>
            Your designer and Project Manager will ensure that this stage runs
            smoothly and resolve any issues that arise.
          </p>
          <br />
          <br />
          <h1 style={{ fontFamily: "cursive", color: "#4d0606" }}>
            Installation
          </h1>
          <br />
          <br />
          <p>
            Bespoke joinery, furniture, lighting and soft furnishings will be
            installed with meticulous precision to create visual cohesion in
            your space.
          </p>
          <br />
          <br />
          <h1 style={{ fontFamily: "cursive", color: "#4d0606" }}>Styling</h1>
          <br />
          <br />
          <p>
            Prior to handover day, our team of designers will have carefully
            curated a selection of luxury accessories and artwork to dress the
            space. These finishing touches are an integral component part
            required to complete the beautiful aesthetic.
          </p>
        </div>
      </div>
      <div className="stage4-flex">
        <img className="stage4-image" src="/img/photo/stage4.webp" />
        <img src="/img/photo/stage4-2.jpg" />
      </div>
    </>
  );
};

export default Stage4;
