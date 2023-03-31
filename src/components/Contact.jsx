import React from "react";
import {
  CallUs,
  Green,
  Mail,
  Norto,
  Nortos,
  Points,
  PointsOne,
  Sand,
  Snow,
  StudiGreen,
  Time,
} from "../TransflowImages";
import "../styles/HomeStyles.css";

const Contact = () => {
  return (
    <div className="bg-[#091242] w-full mt-9">
      <div className="py-32 max-w-2xl mx-auto flex justify-center items-center">
        <div>
          <div className="flex ">
            <div className="h-7 w-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
            <p className="text-white bg-[#E8E8E880] w-28 text-sm p-1">
              Contact
            </p>
            --{" "}
          </div>
          <div className="flex  justify-center items-center md:flex-row md:space-x-8 ">
            <div className="text-white w-96">
              <h1 className="font-bold text-2xl mt-2">Get in touch with us</h1>
              <p className="mt-2 text-xs leading-5">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </p>
              <div className="flex-col items-center mt-4">
                <div className="flex items-center mt-4">
                  <img src={Mail} alt="" />
                  <div className="flex-col ml-2">
                    <p>Email</p>
                    <p>contact@logistics.com</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <img src={CallUs} alt="" />
                  <div className="flex-col ml-2">
                    <p>Call Us</p>
                    <p>(00) 112 365 489</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <img src={Time} alt="" />
                  <div className="flex-col ml-2">
                    <p>Mon - Sat 9.00 - 18.00</p>
                    <p>Sunday Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <form className="max-w-3xl space-y-6">
                <div className="flex space-x-0">
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className=" Input px-3 py-2 border border-gray-400 focus:outline-none focus:ring-2 w-60 h-12"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="Input px-3 py-2 border border-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-400 w-60 h-12"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex flex-col flex-1">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      className="Input px-3 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-60 h-12"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                      className="Input px-3 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-60 h-12"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  className="Input px-3 py-2 border border-gray-400  w-full h-28"
                />

                <button className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] border-none w-40 h-10">
                  Sumbit
                </button>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-0 mt-20">
            <div class="relative inline-block">
              <img
                src={StudiGreen}
                alt=""
                class="h-auto w-full object-contain bg-gradient-to-b from-[#111C54] via-[#111C54] to-[#111C54]"
              />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={Green} alt="" class="w-28" />
              </div>
            </div>
            <div class="relative inline-block">
              <img
                src={Norto}
                alt=""
                className="h-auto w-full object-contain"
              />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={Nortos} alt="" class="w-28" />
              </div>
            </div>
            <div class="relative inline-block">
              <img
                src={PointsOne}
                alt=""
                className="h-auto w-full object-contain"
              />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={Points} alt="" class="w-28" />
              </div>
            </div>
            <div class="relative inline-block">
              <img
                src={Snow}
                alt=""
                className="h-auto w-full object-contain bg-gradient-to-b from-[#111C54] via-[#111C54] to-[#111C54]"
              />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={Sand} alt="" class="w-28" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
