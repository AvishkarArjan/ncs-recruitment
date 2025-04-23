import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundimage from "../../src/assets/bg.png";
import logo from "../assets/ncs-logo.svg";
import jss from "../assets/jsslogoicon.png";
import ncs from "../assets/NCS-RECRUITMENT-cropped.svg";

function Introduction() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/Details");
  };

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center overflow-auto py-6 px-4"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="flex flex-col items-center text-white max-w-4xl w-full mx-auto space-y-6">
        {/* Top Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={jss} className="w-12 h-12 object-contain" alt="JSS" />
            <div className="text-xs font-bold text-black max-w-[200px]">
              <p>JSS Academy of Technical Education, Noida</p>
            </div>
          </div>
          <div className="relative w-20 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-lg z-0" />
            <img
              src={logo}
              alt="NCS Logo"
              className="relative z-10 w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Event Details */}
        <div className="text-center space-y-1 text-black text-xs">
          <p>JSS Mahavidyapeetha</p>
          <p className="font-bold">JSS Academy of Technical Education Noida</p>
          <p className="font-bold text-sm">
            Department of Computer Science & Engineering
          </p>
          <p>In collaboration with Nibble Computer Society</p>
        </div>

        {/* Banner */}
        <div className="w-full flex justify-center">
          <img src={ncs} className="w-full max-w-3xl my-6" alt="NCS Banner" />
        </div>

        {/* Venue/Date */}
        <div className="text-black text-sm text-center space-y-1">
        <p className="text-xl">Drive starts from : 24 Apr 2025</p>

          {/* <p>Time: 1:30 PM Onwards</p> */}
        </div>

        {/* Button */}
        <div className="relative group mt-4">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            className="relative px-6 py-2 text-base font-bold text-white bg-gray-900 rounded-md hover:scale-105 transition duration-200 z-10"
            onClick={handleProceed}
          >
            Register{" "}
            <u>
              <i>Now</i>
            </u>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
