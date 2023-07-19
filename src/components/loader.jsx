import React from "react";

const Loader = () => {
  return (
    <div
      data-aos="fade-in"
      className="w-full h-screen absolute top-0 left-0 flex justify-center items-center z-[1000] bg-transparent"
    >
      <div>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
