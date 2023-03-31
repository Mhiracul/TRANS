import React from "react";
import { FairMan } from "../TransflowImages";
import { WhiteMan } from "../TransflowImages";
import { Comma } from "../TransflowImages";
import Star from "./Star";
import "../styles/HomeStyles.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Testimonial = () => {
  return (
    <div className=" testimonial w-full ">
      <div className="mx-auto max-w-4xl">
        <div className="flex ">
          <div className="h-7 w-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
          <p className="text-black bg-[#E8E8E880] w-28 text-sm p-1">
            Testimonial
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold font-display text-2xl">
            What Our Customer Say
          </h1>
          <div className="text-[#FFB629] flex  ">
            <BsFillArrowLeftCircleFill className="w-16 h-10 text-[#091242]" />
            <BsFillArrowRightCircleFill className="w-16 h-10 text-[#FFB629]" />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-screen mx-auto max-w-4xl">
        <div className="bgTestimony bg-[#F4F4F4]  h-96 p-10 ">
          <div className="flex">
            <div className="flex gap-20">
              <div className="flex">
                <img src={WhiteMan} alt="" className="rounded-full w-20 h-20" />
                <div className="flex-col text-[#091242] ml-2">
                  <h1 className="Name font-bold text-2xl">Kathleen Smith</h1>
                  <p className="text-sm">Fuel Company</p>
                </div>
              </div>
              <img src={Comma} alt="" />
            </div>
          </div>
          <div className="flex-col">
            <p className="text-[#666C89] text-sm mt-4">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
          </div>
          <div className="mt-4">
            <Star />
          </div>
        </div>
        <div className="bgTestimony bg-[#091242]  h-96 p-10">
          <div className="flex">
            <div className="flex gap-20">
              <div className="flex">
                <img src={FairMan} alt="" className="rounded-full w-20 h-20" />
                <div className="flex-col text-white ml-3">
                  <h1 className="Name font-bold ">John Martin</h1>
                  <p className="text-sm">Restoration Company</p>
                </div>
              </div>
              <img src={Comma} alt="" className="ml-3" />
            </div>
          </div>
          <div className="flex-col">
            <p className="text-white text-sm mt-4">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
          </div>
          <div className="mt-4">
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
