import React from "react";
import AboutImg from "../../../public/images/about-img/about1.jpg";
import AboutImg2 from "../../../public/images/about-img/about2.jpg";
import { FiChevronsRight, FiArrowRight } from "react-icons/fi";

const AboutCollage = () => {
  return (
    <div>
      <div className="">
        <div className="sm:w-full sm:h-full ">
          <img
            className="sm:w-full sm:h-[36rem]"
            src={AboutImg}
            alt="about-img"
          />
        </div>
        <div className="sm:flex sm:items-center sm:justify-start  sm:bg-[#83acb0] sm:h-[3rem]">
          <ul className="sm:w-full sm:flex sm:justify-start sm:items-start sm:gap-1 sm:font-normal sm:text-[18px]">
            <li className="sm:justify-center sm:items-center sm:hover:text-[#f98d2f]">
              <a
                className="sm:flex sm:justify-center sm:items-center sm:pl-2 sm:gap-1"
                href=""
              >
                Home <FiChevronsRight className=" sm:pt-1 sm:text-[1.4rem]" />
              </a>{" "}
            </li>
            <li className="sm:hover:text-[#f98d2f]">About</li>
          </ul>
        </div>
        <div className="sm:pt-[3rem] sm:justify-between sm:items-center   ">
          <img src={AboutImg2} alt="" />
          <p className="sm:pt-[3rem] sm:justify-between sm:items-center sm:text-start ">
            Suguna Polytechnic College ( SPC ), Coimbatore was established in
            the year 1997 under the auspices of Suguna Charitable Trust founded
            in the year 1973 by the leading Industrialist Sri. G. Ramaswamy. <br /><br />
            The college is approved by the All India Council of Technical Education [ AICTE ] is located at 2 kms of the Coimbatore to Avinashi National Highway ( NH47 ), at Nehru Nagar, Kalapatti Road, Civil Aerodrame (P.O), Coimbatore – 641 014. The college was established in order to meet the emerging industrial need for qualified manpower and provide
            adequate facilities for training youth to become efficient, skillful technicians and engineers. Under the guidance and patronage of the correspondent Sri.V.Lakshminarayanaswamy and Smt. <br /><br />
            Suguna Lakshminarayanaswamy, Managing Trustee and Sri. Arun Ranganathan,
            CEO. The college has developed excellent facilities and resources that are exceptional in every way. The strength of the college can be attributed to the commitment of the Management, its team of
            experienced educators, its creative & dedicated students and the determination of the Management to make SPC a technical centre of excellence in the city.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCollage;
