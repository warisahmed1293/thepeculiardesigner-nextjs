import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";

import Stage1 from "../../_components/sections/Stage1";
import Stage2 from "../../_components/sections/Stage2";
import Stage3 from "../../_components/sections/Stage3";
import Stage4 from "../../_components/sections/Stage4";

export const metadata = {
  title: {
    default: "Contact",
  },
  description: AppData.settings.siteDescription,
};

const OurProcess = () => {
  return (
    <>
      <PageBanner
        pageTitle={"We’d love to talk"}
        breadTitle={"Our Process"}
        bgImage={"/img/covers/project5.jpg"}
      />
      <div className='d-flex justify-content-center'>
      <div className=''>
      <Stage1 />
      <Stage2 />
      <Stage3 />
      <Stage4/>
      </div>
      <div className='stage-numbers mt-5' >
      <h2 style={{ fontFamily: "cursive", color: "#4d0606" }}>▸Stage_1</h2>
      <h2 style={{ fontFamily: "cursive", color: "#4d0606" }}>▸Stage_2</h2>
      <h2 style={{ fontFamily: "cursive", color: "#4d0606" }}>▸Stage_3</h2>
      <h2 style={{ fontFamily: "cursive", color: "#4d0606" }}>▸Stage_4</h2>
      </div>
      </div>
    </>
  );
};
export default OurProcess;
