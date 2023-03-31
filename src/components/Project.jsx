import React from "react";
import { ManWoman } from "../TransflowImages";
import { Truck } from "../TransflowImages";
import { ShipWater } from "../TransflowImages";
import { Container } from "../TransflowImages";
import { TruckFlex } from "../TransflowImages";
import "../styles/HomeStyles.css";

const Project = () => {
  return (
    <div className="py-7 mb-24">
      <div className="mb-24 justify-center flex flex-col">
        <div className="h-96 w-full bg-white">
          <h1 className="font-bold text-2xl text-center text-[#1C1F35]">
            Transporting Across The World
          </h1>
        </div>
        <div className="h-96 w-full bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
          <div className="grid md:grid-cols-5 gap-0 justify-center items-center p-3 transform  -translate-y-65">
            <div className="WriteUp p-2">
              <img
                src={Truck}
                alt=""
                className="h-auto w-full object-contain"
              />

              <div className="items-start p-2 gap-4 absolute w-208 h-52 left-25 top-70 bottom-0">
                <h1 className="text-xl text-white font-bold">
                  Liquid Transportation
                </h1>
                <p className="text-[#FFB629] text-xs ">Premium Tankers</p>
              </div>
            </div>
            <div className="p-2 WriteUp">
              <img
                src={ManWoman}
                alt=""
                className="h-auto w-full object-contain"
              />
              <div className="items-start p-2 gap-4 absolute w-208 h-52 left-25 top-64 bottom-0">
                <h1 className="text-xl text-white">Packaging Solutions</h1>
                <p className="text-[#FFB629] text-sm text-center">
                  Warehouse Management
                </p>
              </div>
            </div>
            <div className="p-2 WriteUp ">
              <img
                src={TruckFlex}
                alt=""
                className="h-auto w-full object-contain"
              />
              <div className="items-start p-2 gap-4 absolute w-208 h-52 left-25 top-64 bottom-0">
                <h1 className="text-xl text-white">Contract Logistics</h1>
                <p className="text-[#FFB629] text-sm text-center">
                  Road Transportation
                </p>
              </div>
            </div>
            <div className="p-2 WriteUp">
              <img
                src={Container}
                alt=""
                className="h-auto w-full object-contain"
              />
              <div className="items-start p-2 gap-4 absolute w-208 h-52 left-25 top-64 bottom-0">
                <h1 className="text-xl text-white">Warehouse & Distribution</h1>
                <p className="text-[#FFB629] text-sm ">Large Warehouse</p>
              </div>
            </div>
            <div className="p-2 WriteUp">
              <img
                src={ShipWater}
                alt=""
                className="h-auto w-full object-contain"
              />
              <div className="items-start p-2 gap-4 absolute w-full h-52 left-25 top-64 bottom-0">
                <h1 className="text-xl text-white">Specialized Transport</h1>
                <p className="text-[#FFB629] text-sm ">Ocean Transports</p>
              </div>
            </div>
            <div className="grid justify-center items-center h-full w-screen mt-9">
              <button className="bg-[#091242] w-32 h-12 relative overflow-hidden text-[#ffffff] font-bold text-xs text-center">
                More Work
                <span className="absolute bottom-0 right-0">
                  <span
                    className="block h-8 w-8 bg-[#1F2A69]"
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
        </div>
      </div>
    </div>
  );
};

export default Project;
