import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="w-full min-h-[100vh] mt-5 pl-5 pr-5">
        <div className="w-full h-[20rem] bg-[#ff9637] rounded-tl-[3rem] rounded-br-[3rem]">
          <h1 className="text-[white] text-center p-[6rem] font-bold text-[5rem] animate-animated animate-fadeInDown animate-delay-2s">
            Contact Us
          </h1>
        </div>
        <div className="w-full">
          <div className="w-full">
            <h1 className="w-[11rem] font-bold text-[2rem] border-b-[3px] border-b-orange-400 transition-all 0.2s ease-in-out">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
