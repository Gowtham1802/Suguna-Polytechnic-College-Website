import React from "react";
import { ImCancelCircle } from "react-icons/im";
import TrusteeImg from "../../../public/images/trustee-img/Trustee2.png";

const TrusteeDetails = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] absolute z-[111111] flex justify-center items-center p-4">
        <div className=" flex justify-center items-center ">
          <div className="flex justify-between h-[25rem] w-[45rem] bg-[#F0FBFC] rounded-3xl relative pt-14">
            <div className="w-[40%]">
              <img
                src={TrusteeImg}
                alt=""
                className="h-[15rem] w-[15rem] pl-5"
              />
              <div className="w-full text-center pr-6">
                <h5 className="font-bold text-xl pl-2">Mrs.L.Suguna</h5>
                <small className="font-bold text-sm">Managing Trustee</small>
              </div>
            </div>
            <div className="w-[60%] font-serif text-[12px] pr-5 ">
              <p>
                Suguna Polytechnic College was established with the aim of
                providing quality Diploma Level Technical Education on par with
                latest technical know how. The Polytechnic persistently seeks
                and adopts innovative methods to improve the quality of Diploma
                Education on a consistent basis especially to the need of the
                present technological trend. The Infrastructure has a high tech
                atmosphere with students from all parts of the nation.
                Experienced and learned teachers are strongly encouraged to
                nourish the student’s appetite for learning new techniques in
                latest technological advancement. The excellent standards set at
                Suguna Polytechnic College in the field of practical oriented
                teaching to suit the latest need of the technical sphere in this
                part of the country, spur us on in our tireless pursuit of
                excellence. In fact, it has become modus operandi of this
                institution. The highly motivated youngsters on the campus are a
                constant source of pride. We at Suguna Polytechnic College will
                impart futuristic technical education and instill high patterns
                of discipline through our dedicated staff, who shall set
                excellent standards, making our students technologically
                superior and ethically strong, who in turn shall improve the
                quality of life of the human race.
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

export default TrusteeDetails;
