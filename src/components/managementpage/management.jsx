// import SwipeableTextMobileStepper from "./managementcarousel";
import Founder from "../../../public/images/founder-img/Founder2.png";
import Chairman from "../../../public/images/chairman-img/Chairman1.png";
import Trustee from "../../../public/images/trustee-img/Trustee2.png";
import Director from "../../../public/images/director-img/Director1.png";
import Principal from "../../../public/images/principal-img/Principal2.png";
import Coordinator from "../../../public/images/coordinator-img/Dean.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import data from "../../constants/constants.json";
console.log(data);

// let { name, post, imgUrl } = data.management_details;

import Profile from "./profile";

const ManagementPage = () => {
  return (
    <div>
      <div className="w-[100%] p-4">
        <div className="text-center">
          <span className="mb-3 flex items-center justify-center text-lg font-semibold text-[#1DC1D1]">
            INSTRUCTORS
          </span>
          <h1 className="flex items-center justify-center text-3xl font-bold">
            Expert Instructors
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <div className="w-[100%] pt-6 grid grid-cols-1 justify-items-center gap-10 sm:w-[50%] sm:grid sm:grid-cols-1 sm:gap-6 md:grid md:grid-cols-2 md:gap-10 md:w-[80%] lg:w-[70%] lg:gap-[5rem] xl:w-[80%] xl:grid xl:grid-cols-3 ">
            {data?.management_details.length > 0
              ? data.management_details.map((detail, index) => {
                  return <Profile detail={detail} key={index} />;
                })
              : "No data found"}

            {/* <div className="flex flex-col h-[23rem] w-[18rem] bg-[#F0FBFC] rounded-lg">
              <div className="overflow-hidden">
                <img
                  className="h-[20rem] w-[20rem] scale-[1] hover:scale-[1.1] transition duration-[400ms]"
                  src={imgUrl}
                  alt="one"
                />
              </div>
              <div className=" relative">
                <div className="w-full  absolute top-[-1.5rem] left-0 right-0 flex justify-center">
                  <div className="flex items-center mt-1 w-[8.5rem] h-[3rem]  justify-center space-x-3 bg-[#F0FBFC] ">
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaFacebookF />
                    </button>
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaTwitter />
                    </button>
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaLinkedin />
                    </button>
                  </div>
                </div>
                <div className="w-[18rem] h-[6.5rem] flex flex-col text-center justify-center bg-[#F0FBFC] mt-0">
                  <h5 className="mb-0 font-bold text-xl mt-6">{name}</h5>
                  <small className="font-bold text-sm">{post}</small>
                  <button className="hover:text-[#1DC1D1] flex justify-center items-center font-bold">
                    Read More <GoArrowRight />
                  </button>
                </div>
              </div>
            </div> */}

            {/* <div className="flex flex-col h-[23rem] w-[18rem] bg-[#F0FBFC] rounded-lg">
              <div className="overflow-hidden">
                <img
                  className="h-[20rem] w-[18rem] ml- hover:scale-[1.3] scale-[1.1] transition duration-[400ms] pt-3"
                  src={Trustee}
                  alt="one"
                />
              </div>
              <div className=" relative">
                <div className="w-full  absolute top-[-1.5rem] left-0 right-0 flex justify-center">
                  <div className="flex items-center mt-1 w-[8.5rem] h-[3rem]  justify-center space-x-3 bg-[#F0FBFC]">
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaFacebookF />
                    </button>
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaTwitter />
                    </button>
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaLinkedin />
                    </button>
                  </div>
                </div>
                <div className="w-[18rem] h-[6.5rem] flex flex-col text-center  justify-center bg-[#F0FBFC] mt-0">
                  <h5 className="mb-0 font-bold text-xl mt-6">Mrs.L.Suguna</h5>
                  <small className="font-bold text-sm">Managing Trustee</small>
                  <button className="hover:text-[#1DC1D1] flex justify-center items-center font-bold">
                    Read More <GoArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col  h-[23rem] w-[18rem] bg-[#F0FBFC] rounded-lg">
              <div className="overflow-hidden">
                <img
                  className="h-[20rem] w-[16rem] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms] pt-8 "
                  src={Director}
                  alt="one"
                />
              </div>
              <div className=" relative">
                <div className="w-full  absolute top-[-1.5rem] left-0 right-0 flex justify-center">
                  <div className="flex items-center mt-1 w-[8.5rem] h-[3rem]  justify-center space-x-3 bg-[#F0FBFC]">
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaFacebookF />
                    </button>
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaTwitter />
                    </button>
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaLinkedin />
                    </button>
                  </div>
                </div>
                <div className="w-[18rem] h-[6.5rem] flex flex-col text-center  justify-center bg-[#F0FBFC] mt-0">
                  <h5 className="mb-0 font-bold text-xl mt-6">
                    {" "}
                    Mr.Arun Ranganathan
                  </h5>
                  <small className="font-bold text-sm">Director</small>
                  <button className="hover:text-[#1DC1D1] flex justify-center items-center font-bold">
                    Read More <GoArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col  h-[23rem] w-[18rem] bg-[#F0FBFC] rounded-lg">
              <div className="overflow-hidden">
                <img
                  className="h-[20rem] w-[16.5rem] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms] pt-2"
                  src={Principal}
                  alt="one"
                />
              </div>
              <div className=" relative">
                <div className="w-full  absolute top-[-1.5rem] left-0 right-0 flex justify-center">
                  <div className="flex items-center mt-1 w-[8.5rem] h-[3rem]  justify-center space-x-3 bg-[#F0FBFC]">
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaFacebookF />
                    </button>
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaTwitter />
                    </button>
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaLinkedin />
                    </button>
                  </div>
                </div>
                <div className="w-[18rem] h-[6.5rem] flex flex-col text-center  justify-center bg-[#F0FBFC] mt-0">
                  <h5 className="mb-0 font-bold text-xl mt-6">
                    {" "}
                    Mr.V.Govindarajalu
                  </h5>
                  <small className="font-bold text-sm">
                    Principal of Suguna Polytechnic College
                  </small>
                  <button className="hover:text-[#1DC1D1] flex justify-center items-center font-bold">
                    Read More <GoArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col  h-[23rem] w-[18rem] bg-[#F0FBFC] rounded-lg">
              <div className="overflow-hidden">
                <img
                  className="h-[17rem] w-[18rem] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]"
                  src={Coordinator}
                  alt="one"
                />
              </div>
              <div className=" relative">
                <div className="w-full  absolute top-[-1.5rem] left-0 right-0 flex justify-center">
                  <div className="flex items-center mt-1 w-[8.5rem] h-[3rem]  justify-center space-x-3 bg-[#F0FBFC]">
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaFacebookF />
                    </button>
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaTwitter />
                    </button>
                    <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2 ">
                      <FaLinkedin />
                    </button>
                  </div>
                </div>
                <div className="w-[18rem] h-[6.5rem] flex flex-col text-center  justify-center bg-[#F0FBFC] mt-0">
                  <h5 className="mb-0 font-bold text-xl mt-6"> Mrs.S.Ramya</h5>
                  <small className="font-bold text-sm">Dean</small>
                  <button className="hover:text-[#1DC1D1] flex justify-center items-center font-bold text-center">
                    Read More{" "}
                    <GoArrowRight className="text-center items-center font-bold" />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
