import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import CoresSection from "../../_components/sections/Cores";

export const metadata = {
  title: {
    default: "FAQ's",
  },
  description: AppData.settings.siteDescription,
};

const FAQS = () => {
  return (
    <>
      <PageBanner
        pageTitle={"FAQ's"}
        breadTitle={"FAQ's"}
        bgImage={"/img//project/29.jpg"}
      />
      <CoresSection />
    </>
  );
};
export default FAQS;
