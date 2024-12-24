import React from "react";

const Stage2 = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="col-md-6 col-lg-6 col-xl-8">
          <div className="mil-suptitle mil-upper mil-up mil-mb-30">Stage 2</div>
          <h1 className="mil-upper mil-up">Design Development</h1>
          <h1
            style={{ fontFamily: "cursive", color: "#4d0606" }}
            className="mil-upper mil-up mt-5 mb-5"
          >
            Concept
          </h1>

          <br />
          <p className="mil-text-sm-stage mil-up mil-dark-soft mil-mb-30">
            In the second stage you should expect to have one or two meetings
            with the designer.
            <br /> We will present the initial concept including floor plans and
            furniture layouts. If we are proposing any structural changes we
            will discuss this in the first meeting. You will be shown flooring
            and wall finishes along with samples and visual references of
            furniture, lighting and soft furnishings. <br />
            <br />
            This is a collaborative and hands on experience. We encourage you to
            handle the samples and finishes as we explain how they work
            together. We invite questions and feedback so we can tailor your
            unique design to meet your exacting requirements.
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="stage2-flex">
          <img className="stage2-image" src="/img/photo/stage2-1.webp" />
          <img className="stage2-image" src="/img/photo/stage2-2.webp" />
        </div>
      </div>
      <div className="detail-flex">
        <img className="stage2-3-image" src="/img/photo/stage2-3.webp" />
        <div>
          <h1 style={{ fontFamily: "cursive", color: "#4d0606" }}>Detail</h1>
          <p className="col-md-6 col-lg-6 col-xl-5">
            Following the concept presentation we focus on the detail, paying
            attention to each individual element so our team can seamlessly
            deliver your exquisite design. Bespoke cabinetry drawings, joinery
            and hardware details, plumbing specification, lighting design and
            electrical plans are presented to complete your proposal.
          </p>
        </div>
      </div>
      <div className="container">
        <img className="stage2-4-image" src="/img/photo/stage2-4.webp" />
      </div>
    </>
  );
};

export default Stage2;
