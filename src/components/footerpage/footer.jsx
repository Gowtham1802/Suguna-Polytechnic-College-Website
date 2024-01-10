import React from "react";
import FooterLogo from "../../../public/images/footer-img/footer-logo.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterPage = () => {
  return (
    <div>
      <div className="w-full h-[30rem] bg-black flex flew-row justify-start">
        <div className="w-[33.3%] flex flex-col gap-8 p-[5rem] items-center">
          <div className="flex flex-row gap-4 items-center">
            <img
              className="w-20 h-20 rounded-full"
              src={FooterLogo}
              alt="footer-logo"
            />
            <h1 className="text-[white] flex flex-col items-center">
              <span className="text-[#ff9637]  text-[40px] border-b-[3px] border-b-orange-400 ">
                SUGUNA
              </span>
              {/* <br />{" "} */}
              <span className="text-[#83acb0] font-medium">
                POLYTECHNIC COLLEGE
              </span>
            </h1>
          </div>
          <div className="flex gap-6">
            <div className="">
              <FaFacebookF className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaFacebookF>
            </div>
            <div className="">
              <FaTwitter className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaTwitter>
            </div>
            <div className="">
              <FaInstagramSquare className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaInstagramSquare>
            </div>
            <div className="">
              <FaYoutube className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaYoutube>
            </div>
          </div>
        </div>
        <div className="w-[33.3%] p-[5rem]">
          <h1 className="text-white text-[2rem] font-bold pb-3">Quick Links</h1>
          <ul className="text-white text-[20px]  ">
            <li className="hover:text-[#ff9637] cursor-pointer pb-3">
              <a href="">About Us</a>
            </li>
            <li className="hover:text-[#ff9637] cursor-pointer pb-3">
              <a href="">Awards</a>
            </li>
            <li className="hover:text-[#ff9637] cursor-pointer pb-3">
              <a href="">Facilities</a>
            </li>
            <li className="hover:text-[#ff9637] cursor-pointer pb-3">
              <a href="">Departments</a>
            </li>
            <li className="hover:text-[#ff9637] cursor-pointer pb-3">
              <a href="">Anti-Ragging Committee</a>
            </li>
          </ul>
        </div>
        <div className="w-[33.3%] p-[5rem]">
          <ul className="text-white text-[20px] ">
            <li className="hover:text-[#ff9637] cursor-pointer pb-3">
              <a href="">Admission</a>
            </li>
            <li className="hover:text-[#ff9637] cursor-pointer pb-3">
              {" "}
              <a href="">Scholarship</a>
            </li>
            <li className="hover:text-[#ff9637] cursor-pointer pb-3">
              <a href="">Our Recruiters</a>
            </li>
            <li className="hover:text-[#ff9637] cursor-pointer pb-3">
              <a href="">Placements</a>
            </li>
            <li className="hover:text-[#ff9637] cursor-pointer pb-3">
              <a href="">Photo Gallery</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col-reverse">
          <div className="">
            <IoCall className="text-[white]"></IoCall>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
