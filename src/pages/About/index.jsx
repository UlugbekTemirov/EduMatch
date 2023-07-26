import React from "react";
import PagesHeader from "../../components/pages-header";

const Index = () => {
  return (
    <div>
      <PagesHeader
        image={
          "https://www.tdream.it/wp-content/uploads/2016/11/About-Us-3.jpg  "
        }
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
