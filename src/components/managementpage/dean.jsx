import React from "react";
import { ImCancelCircle } from "react-icons/im";
import DeanImg from "../../../public/images/coordinator-img/Dean.png";

const DeanDetails = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] absolute z-[111111] flex justify-center items-center p-4">
        <div className=" flex justify-center items-center ">
          <div className="flex justify-between h-[25rem] w-[45rem] bg-[#F0FBFC] rounded-3xl relative pt-14">
            <div className="w-[40%]">
              <img src={DeanImg} alt="" className="h-[15rem] w-[15rem] pl-5" />
              <div className="w-full text-center pr-6">
                <h5 className="font-bold text-xl pl-2">Mrs.S.Ramya</h5>
                <small className="font-bold text-sm">Dean</small>
              </div>
            </div>
            <div className="w-[60%] font-serif text-[20px] pr-5 ">
              <p>
                Our desire is to help each student become a life long learner
                who through the course will learn the academic, social & work
                place skills to allow them to complete successfully in the
                forthcoming global economy. Our commitment is to provide a safe,
                positive, intellectual learning environment that will empower
                student to become creative, problem solvers, critical thinkers
                and inspired learners.
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

export default DeanDetails;
