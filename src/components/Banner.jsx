import React from "react";
import { Hero } from "../TransflowImages";
//import Header from './Header';
import NavigationBar from "./NavigationBar";
import "../styles/HomeStyles.css";

const Banner = () => {
  return (
    <div
      role="banner"
      className=" text-white  w-full   mb-27 "
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <NavigationBar />
      <div className="max-w-4xl mx-auto  items-center py-32 mb-24">
        <div className="flex">
          <div className="h-7  w-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>

          <p className="bg-[#041C3780] h-7 max-w-[244px] text-center font-display text-sm leading-14 p-1 align-top">
            Logistics & Supply Chain Solutions
          </p>
        </div>
        <h1 className="text-white text-4xl font-semibold font-display tracking-widest leading-10 max-w-sm mt-3">
          Your Gateway to any Destination in the World
        </h1>
        <p className="text-xs font-extralight mt-3 w-96 ">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
        </p>

        <button className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] w-32 h-12 relative overflow-hidden text-[#23212A] font-bold text-xs text-center">
          Explore More
          <span className="absolute bottom-0 right-0">
            <span
              className="block h-8 w-8 bg-white"
              style={{
                transform: "rotate(90deg)",
                marginTop: "-5px",
                marginRight: "-3px",
                borderRadius: "0px 0px 0px 250px",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
