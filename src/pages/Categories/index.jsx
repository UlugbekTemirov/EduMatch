import React from "react";
import PagesHeader from "../../components/pages-header";

const Index = () => {
  return (
    <div>
      <PagesHeader
        title={{
          en: "Categories",
          uz: "Yo'nalishlar",
          ru: "Категории",
        }}
        image={
          "https://images.adsttc.com/media/images/619d/4b60/f91c/818c/6e00/0006/large_jpg/shutterstock_728342668.jpg?1637698337"
        }
      />
    </div>
  );
};

export default Index;
