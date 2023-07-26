import React from "react";
import PagesHeader from "../../components/pages-header";

const Index = () => {
  return (
    <div>
      <PagesHeader
        image={
          "https://www.usnews.com/object/image/0000015e-db5b-ddb1-a55e-df7b29960000/plane.jpg?update-time=1506918990614&size=responsive640"
        }
        title={{
          en: "News",
          uz: "Yangiliklar",
          ru: "Новости",
        }}
      />
    </div>
  );
};

export default Index;
