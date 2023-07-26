import React from "react";
import PagesHeader from "../../components/pages-header";

const Index = () => {
  return (
    <div>
      <PagesHeader
        image={"https://mentalaba.uz/assets/universities_bg.jpg"}
        title={{
          en: "Learning Centers",
          uz: "O'quv markazlari",
          ru: "Учебные центры",
        }}
      />
    </div>
  );
};

export default Index;
