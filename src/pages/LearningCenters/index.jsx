import React from "react";
import PagesHeader from "../../components/pages-header";
import SidebarLayout from "../../layout/sidebar.layout";

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

      <section>
        <SidebarLayout>Learning centers</SidebarLayout>
      </section>
    </div>
  );
};

export default Index;
