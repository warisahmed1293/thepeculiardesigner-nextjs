import React from "react";
import PageBanner from "../../_components/PageBanner";

const page = () => {
  return (
    <>
      <PageBanner
        pageTitle={"Our Story"}
        breadTitle={"Story"}
        bgImage={"/img/covers/project4.jpg"}
      />
      <div
        style={{ marginTop: "150px", marginBottom: "150px", fontWeight:'700' }}
        className="container "
      >
        <p>
          Founded in Huddersfield, The Peculiar Designer has evolved into a
          leading design studio, collaborating with private clients, property
          developers, and commercial partners across Yorkshire and the UK. With
          a wealth of experience and expertise, we offer a full spectrum of
          design services, whether managing an entire project or transforming an
          existing space to refresh and enhance your home.
          <br />
          <br />
          We take pride in understanding our clients' unique tastes, needs, and
          lifestyles—whether sophisticated and bespoke or casual and
          understated—while always respecting the character and integrity of the
          space we work within.
          <br />
          <br />
          Dedicated to creating timeless, luxurious interiors, we are known for
          our personal and relaxed approach. One of our greatest achievements is
          the fact that many of our clients return to us time and again.
        </p>
      </div>
    </>
  );
};

export default page;
