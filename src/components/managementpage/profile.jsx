import { useState } from "react";
import FounderDetails from "./founder";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Profile = ({ detail }) => {
  // console.log(name, post);
  const { name, post, imgUrl, popupContent } = detail;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-[23rem] w-[18rem] bg-[#F0FBFC] rounded-lg flex flex-col items-center">
        <div className="w-[90%] h-[15rem] overflow-hidden">
          <img
            className="w-full h-auto object-center hover:scale-[1.1] transition duration-[400ms]"
            src={imgUrl}
            alt="one"
          />
        </div>
        <div className="relative pt-3">
          <div className="absolute top-[-1rem] left-0 right-0 flex justify-center">
            <div className="flex items-center w-[8.5rem] h-[3rem] justify-center space-x-3 bg-[#F0FBFC]">
              <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2">
                <FaFacebookF />
              </button>
              <button className="bg-[#1dc1d1]  hover:text-[#1DC1D1] hover:bg-[white] text-white p-2">
                <FaTwitter />
              </button>
              <button className="bg-[#1DC1D1] text-white hover:text-[#1DC1D1] hover:bg-[white] p-2">
                <FaLinkedin />
              </button>
            </div>
          </div>
          <div className="w-full h-[6rem] flex flex-col text-center justify-center bg-[#F0FBFC] mt-0">
            <h5 className="mb-0 font-bold text-xl mt-2">{name}</h5>
            <small className="font-bold text-sm">{post}</small>
            <button
              className="hover:text-[#1DC1D1] flex justify-center items-center font-bold"
              onClick={() => setIsOpen(true)}
            >
              Read More <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
      <FounderDetails
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name={name}
        post={post}
        imgUrl={imgUrl}
        popupContent={popupContent}
      />
    </>
  );
};

export default Profile;
