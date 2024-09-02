import React from "react";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Streamlined Cash Management for Your Business"} />
      <HomeTwo />
    </Wrapper>
  );
};

export default index;
