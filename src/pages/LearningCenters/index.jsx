import React from "react";

// components
import PagesHeader from "components/pages-header";

// layout
import SidebarLayout from "layout/sidebar.layout";

// assets
import universities_header_img from "assets/images/universities-header.jpg";

const Index = () => {
  return (
    <div>
      <PagesHeader
        image={universities_header_img}
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
