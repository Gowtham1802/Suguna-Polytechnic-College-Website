import React from "react";
import { FiChevronsRight, FiArrowRight } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import FunderImg from "../../../public/images/founder-img/Founder2.png";

const FounderDetails = ({
  isOpen,
  setIsOpen,
  name,
  post,
  imgUrl,
  popupContent,
}) => {
  return (
    <>
      {isOpen ? (
        <div className="w-[100%] h-[100%] bg-[rgba(0,0,0,0.7)] fixed z-[111111] flex flex-col justify-center items-center p-4 bottom-[0rem] md:w-[100%] md:h-[100%] lg:w-[100vw] lg:h-[100vh] lg:flex lg:flex-row lg:justify-center lg:items-center">
          <div className=" flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center h-[25rem] w-[20rem] bg-[#F0FBFC] rounded-l-3xl relative sm:w-[30rem] sm:h-[30rem] sm:flex sm:justify-center sm:items-center lg:flex lg:flex-row lg:justify-center lg:items-center lg:w-[50rem] lg:h-[30rem]">
              <div className="lg:w-[50%] flex flex-col items-center justify-center lg:flex lg:flex-col lg:justify-center lg:items-center lg:">
                <img
                  src={imgUrl}
                  alt=""
                  className="h-[11rem] w-[11rem] sm:w-[13rem] sm:h-[13rem] lg: lg:w-[16rem]"
                />
                <div className="w-full text-center sm:mb-5 sm:text-center">
                  <h5 className=" font-bold text-xl">{name}</h5>
                  <small className="font-bold text-sm">{post}</small>
                </div>
              </div>
              <div className="w-[100%] h-[100%] font-serif text-[16px] overflow-y-scroll p-4 lg:text-[20px]">
                <p className="w-[100%] p-4 lg:w-[100%] lg: ">{popupContent}</p>
              </div>
              <div className="absolute right-1 top-1 text-[1.5rem] cursor-pointer">
                <ImCancelCircle onClick={() => setIsOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FounderDetails;
