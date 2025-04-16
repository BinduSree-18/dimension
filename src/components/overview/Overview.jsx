import React from "react";
import Coreteam from "../../assets/coreteam.png";
import "./RotatingBorder.css";

const Overview = () => {
  return (
    <div className="w-full flex justify-center items-center my-28">
      <div class="moving-border-container">
        <div class="border-line-vertical-1"></div>
        <div class="border-line-vertical-2"></div>

        <img
          src={Coreteam}
          alt="Core Team"
          className="rounded-xl w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Overview;
