import React from "react";
import { FiChevronsRight, FiArrowRight } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import FunderImg from "../../../public/images/founder-img/Founder2.png";

const FounderDetails = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="w-[100vw] h-[200vh] bg-[rgba(0,0,0,0.7)] absolute z-[111111] flex justify-center items-center p-4 bottom-[-23rem] left-0">
          <div className=" flex justify-center items-center ">
            <div className="flex justify-between h-[25rem] w-[45rem] bg-[#F0FBFC] rounded-3xl relative pt-14">
              <div className="w-[40%]">
                <img
                  src={FunderImg}
                  alt=""
                  className="h-[15rem] w-[15rem] pl-5"
                />
                <div className="w-full text-center pr-6">
                  <h5 className="mb-0 font-bold text-xl mt-2">
                    Mr.G.Ramaswamy
                  </h5>
                  <small className="font-bold text-sm">Founder</small>
                </div>
              </div>
              <div className="w-[60%] font-serif text-[16px] pr-5 ">
                <p>
                  Sri.G.Ramaswamy started his career as a marketing person in a
                  small organization at Chennai. He gained experience in meeting
                  customers especially the farming community. He understood the
                  demand for electric motors – a prime mover for machinery, pump
                  or any moving engineering product. He started an enterprise at
                  Coimbatore, the home-town for manufacturing Electric motors,
                  products that are used for generations. He was also honoured
                  with Rashtriya Samman Award by the Govt. of India for being
                  the highest tax payer to the government for three consecutive
                  years.
                </p>
              </div>
              <div className="absolute right-5 top-5 text-[1.5rem] cursor-pointer">
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
