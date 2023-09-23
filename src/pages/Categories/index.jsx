import React from "react";
import PagesHeader from "components/pages-header";

// assets
import categories_header_img from "assets/images/categories-header.jpg";

const Index = () => {
  return (
    <div>
      <PagesHeader
        title={{
          en: "Categories",
          uz: "Yo'nalishlar",
          ru: "Категории",
        }}
        image={categories_header_img}
      />
    </div>
  );
};

export default Index;
