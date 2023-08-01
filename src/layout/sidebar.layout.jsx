import React from "react";
import Sidebar from "../components/sidebar";

const SidebarLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-10 gap-5">
        <div className="col-span-3 border">
          <Sidebar />
        </div>
        <div className="col-span-7 border">{children}</div>
      </div>
    </div>
  );
};

export default SidebarLayout;
