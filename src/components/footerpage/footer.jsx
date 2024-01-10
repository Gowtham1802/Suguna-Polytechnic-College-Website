import React from "react";
import FooterLogo from "../../../public/images/footer-img/footer-logo.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterPage = () => {
  return (
    <div>
      <div className="w-full h-[20rem] bg-black">
        <div className="flex gap-3 ">
          <img
            className="w-20 h-20 ml-10 mt-10 rounded-full"
            src={FooterLogo}
            alt="footer-logo"
          />
          <h1 className="text-[white] mt-8 mr-4 ">
            <span className="text-[#ff9637]  text-[40px] border-b-[3px] border-b-orange-400 ">
              SUGUNA
            </span>
            <br />{" "}
            <span className="text-[#83acb0] font-medium">
              POLYTECHNIC COLLEGE
            </span>
          </h1>
        </div>
        <div className="flex gap-4 mt-10 ml-12">
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
    </div>
  );
};

export default FooterPage;
