import React from "react";
import FooterLogo from "../../../public/images/footer-img/footer-logo.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const FooterPage = () => {
  return (
    <div>
      <div className="w-full bg-black flex flex-col justify-start overflow-x-hidden sm:overflow-x-hidden md:overflow-x-hidden lg:overflow-x-hidden xl:overflow-x-hidden 2xl:overflow-x-hidden ">
        <div className="w-full flex flex-col justify-start items-center sm:flex-col sm:justify-center lg:w-full lg:flex-row lg:justify-start ">
          <div className="w-[28%] flex flex-col gap-8 px-[5rem] pt-[3rem] pb-[1rem] items-center sm:w-[100%] lg:w-[28%] lg:px-[2rem] lg:gap-5 ">
            <div className="flex flex-row gap-2 items-center sm:items-center lg:gap-1 ">
              <img
                className="w-20 h-20 rounded-full lg:w-14 lg:h-14 "
                src={FooterLogo}
                alt="footer-logo"
              />
              <h1 className="text-[white] flex flex-col items-center lg:items-start ">
                <span className="text-[#ff9637] text-[40px] border-b-[3px] border-b-orange-400 lg:text-[25px]  ">
                  SUGUNA
                </span>
                {/* <br />{" "} */}
                <span className=" text-[#83acb0] font-medium lg:text-[10px] ">
                  POLYTECHNIC COLLEGE
                </span>
              </h1>
            </div>
            <div className="flex gap-6 sm:flex-row sm:items-center lg:gap-4 ">
              <div className="">
                <FaFacebookF className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100 lg:w-[35px] lg:h-[35px] lg:p-[6px]  "></FaFacebookF>
              </div>
              <div className="">
                <FaTwitter className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100 lg:w-[35px] lg:h-[35px] lg:p-[6px] "></FaTwitter>
              </div>
              <div className="">
                <FaInstagramSquare className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100 lg:w-[35px] lg:h-[35px] lg:p-[6px] "></FaInstagramSquare>
              </div>
              <div className="">
                <FaYoutube className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100 lg:w-[35px] lg:h-[35px] lg:p-[6px] "></FaYoutube>
              </div>
            </div>
          </div>
          <div className="w-[24%] p-[2rem] pt-[3rem] pb-[5rem] flex sm:w-[100%] sm-flex sm:flex-col sm:items-center sm:text-center sm:justify-center lg:w-[48%] lg:p-[2rem] lg:pr-[11rem] lg:pt-[2rem] lg:pb[6rem]lg:flex lg:flex-row">
            <div className="lg:w-[50%]">
              <h1 className="text-white text-[2rem] font-bold pb-2 lg:text-[1.5rem] text-left">
                Quick Links
              </h1>
              <ul className="text-white text-[20px] sm:flex sm:flex-col sm:justify-center sm:text-center lg:text-[18px] w-full">
                <li className=" hover:text-[#ff9637] cursor-pointer pb-2 sm:text-center">
                  <a
                    className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                    href=""
                  >
                    <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                    About Us
                  </a>
                </li>
                <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                  <a
                    className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                    href=""
                  >
                    <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                    Awards
                  </a>
                </li>
                <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                  <a
                    className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                    href=""
                  >
                    <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                    Facilities
                  </a>
                </li>
                <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                  <a
                    className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                    href=""
                  >
                    <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                    Departments
                  </a>
                </li>
                <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                  <a
                    className="flex justify-start gap-2 items-center hover:scale-[0.9] transition-all duration-[600ms]"
                    href=""
                  >
                    <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                    <p className="text-left">Anti-Ragging Committee</p>
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-[24%] pt-[rem] pb-[3rem] flex sm:w-[100%] sm:flex-col sm:items-start lg:pr-[5rem] sm:relative lg:pt-[3rem] lg:pb[1rem] lg:flex-col lg:justify-start lg:items-start lg:w-[50%] ">
              <ul className="text-white text-[20px] sm:items-center lg:text-[18px] lg:pl-[7.2rem]">
                <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                  <a
                    className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                    href=""
                  >
                    <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                    Admission
                  </a>
                </li>
                <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                  {" "}
                  <a
                    className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                    href=""
                  >
                    <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                    Scholarship
                  </a>
                </li>
                <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                  <a
                    className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                    href=""
                  >
                    <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                    Our Recruiters
                  </a>
                </li>
                <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                  <a
                    className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                    href=""
                  >
                    <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                    Placements
                  </a>
                </li>
                <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                  <a
                    className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                    href=""
                  >
                    <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                    Photo Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[25%] p-[rem] pt-[4rem] pb-[3rem] sm:w-[100%] sm:flex sm:justify-start sm:items-center sm:flex-col sm:pt-[0rem] lg:w-[24%] lg:p-[2rem] lg:pl-[rem] lg:pt-[3rem] lg:pb[1rem]">
            <h1 className="text-[white] text-[2rem] font-bold pb-2 sm:justify-start sm:items-start lg:text-[1.5rem]  ">
              Our Institutions
            </h1>
            <ul className="text-[white] text-[20px] sm:justify-start sm:items-start sm:pl-[6.3rem] lg:text-[18px]">
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                  Suguna College of Arts and Science
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                  Suguna College of Engineering
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                  Suguna PIP School
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward className="text-[20px]"></IoIosArrowForward>
                  Suguna Innovation Institute
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-row justify-evenly items-center pb-[7rem] sm:flex-col sm:gap-4 lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:pt-[2rem] lg:pb-[3.3rem] ">
          <div className="flex justify-around items-center gap-2 sm:flex-col lg:flex-row ">
            <IoCall className="text-[#ff9637] text-[3rem] lg:text-[2rem] "></IoCall>
            <div>
              <span className="text-[white] text-[20px] lg:text-[14px] ">
                +91 8870008623
              </span>
              <br />
              <span className="text-[white] text-[20px] lg:text-[14px] ">
                +91 9600860934
              </span>
            </div>
          </div>
          <div className=" flex items-center gap-2 sm:flex sm:flex-col ">
            <div className="flex items-center gap-2 sm:flex-col lg:flex-row">
              <MdEmail className="text-[#ff9637] text-[3rem] lg:text-[2rem] "></MdEmail>
              <div>
                <span className="text-[white] text-[20px] lg:text-[14px] ">
                  sugunapolytechniccollege@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-2 sm:flex-col lg:flex-row">
            <a href="https://www.google.com/maps/place/Suguna+Polytechnic+College/@11.0509439,77.0322591,15z/data=!4m6!3m5!1s0x3ba857bbffffffff:0xfaed96bd33545bc0!8m2!3d11.0509439!4d77.0322591!16s%2Fg%2F1tl7m4b8?entry=ttu">
              <FaLocationDot className="text-[#ff9637] text-[3rem] lg:text-[2rem] "></FaLocationDot>
            </a>
            <div className="items-center">
              <span className="text-[white] font-bold text-[20px] lg:text-[14px] ">
                Kalapatti Main Rd, near Vinayaka Temple, GKD Nagar,
              </span>
              <br />
              <span className="text-[white] text-[20px] lg:text-[14px] ">
                Nehru Nagar West, Coimbatore, Tamil Nadu - 641014
              </span>
            </div>
          </div>
        </div>
        <div className="w-full items-center text-center pt-[rem] pb-[2rem]">
          <span className="text-[#979696] text-center items-center text-[20px] lg:text-[14px] ">
            Copyright © 2023 Suguna Polytechnic College
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
