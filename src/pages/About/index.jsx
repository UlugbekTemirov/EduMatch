import React from "react";

// components
import PagesHeader from "components/pages-header";

// assets
import about_header_img from "assets/images/about-us-header.jpg";

const Index = () => {
  return (
    <div>
      <PagesHeader
        image={about_header_img}
        title={{
          en: "About",
          uz: "Biz haqimizda",
          ru: "О нас",
        }}
      />
    </div>
  );
};

export default Index;
