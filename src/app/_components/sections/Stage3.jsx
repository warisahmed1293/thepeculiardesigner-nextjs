import React from "react";

const Stage3 = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <div className="mil-suptitle mil-upper mil-up mil-mb-30">Stage 3</div>
          <h1 className="mil-upper mil-up">Document Preparation</h1>
        </div>
      </div>
      <div className="container stage3-flex">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <p className="mil-text-sm-stage mil-up mil-dark-soft mil-mb-30">
            Your quotation will be prepared and, at this stage, you may be
            introduced to our trades team as they carry out site surveys. We
            will have already briefed them on your project requirements. Your
            plans and drawings will have also been shared to communicate our
            vision. <br />
            <br />
            Once all the estimates are in, you will receive a document pack that
            will include contract papers, our T & Cs, a fully itemised quotation
            along with our Project Management fees. If you selected to receive
            photorealistic CGIs, your designer will be delighted to share these
            with you at this stage.
          </p>
        </div>
        <img className="stage3-image" src="/img/photo/stage3.webp" />
      </div>
      <img className="stage3-2-image" src="/img/photo/stage3-2.webp" />
    </>
  );
};

export default Stage3;
