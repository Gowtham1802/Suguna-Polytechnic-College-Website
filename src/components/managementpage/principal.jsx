import React from "react";
import { ImCancelCircle } from "react-icons/im";
import PrincipalImg from "../../../public/images/principal-img/Principal2.png";

const PrincipalDetails = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] absolute z-[111111] flex justify-center items-center p-4">
        <div className=" flex justify-center items-center ">
          <div className="flex justify-between h-[25rem] w-[45rem] bg-[#F0FBFC] rounded-3xl relative pt-14">
            <div className="w-[40%]">
              <img
                src={PrincipalImg}
                alt=""
                className="h-[15rem] w-[15rem] pl-5"
              />
              <div className="w-full text-center pr-6">
                <h5 className="font-bold text-xl pl-2">Mr.V.Govindarajalu</h5>
                <small className="font-bold text-sm">
                  {" "}
                  Principal of Suguna Polytechnic College
                </small>
              </div>
            </div>
            <div className="w-[60%] font-serif text-[18px] pr-5 ">
              <p>
                Knowledge is one’s guide throughout his lifetime. It
                differentiates between good and bad, understand discipline and
                are common same. Teaching is the best profession in the world.
                It does not stop at subjects,practicals or just getting a
                certificate. It is guiding the student to observe and learn. I
                do not believe in words. I believe in action , which would speak
                for. Suguna Polytechnic College backed with Suguna Group of
                Industries & Institutions is the best place to “Explore your
                Future and achieve your dreams”.
              </p>
            </div>
            <div className="absolute right-5 top-5 text-[1.5rem] cursor-pointer">
              <ImCancelCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDetails;
