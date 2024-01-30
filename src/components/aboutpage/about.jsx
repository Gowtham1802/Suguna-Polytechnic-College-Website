import React from "react";
import "./about.css";
import AboutImg from "../../../public/images/about-img/about1.jpg";
import AboutImg2 from "../../../public/images/about-img/about2.jpg";
import { FiChevronsRight, FiArrowRight } from "react-icons/fi";

const AboutCollage = () => {
  return (
    <div>
      <div className="">
        <div className="sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full ">
          <img
            className="sm:w-full sm:h-[36rem] md:w-full md:h-[36rem] lg:w-full lg:h-[35rem] xl:w-[100%] xl:h-[35rem] animate-fadeInLeft"
            src={AboutImg}
            alt="about-img"
          />
        </div>
        <div className="sm:flex sm:items-center sm:justify-start  sm:bg-[#83acb0] sm:h-[3rem] w-full flex flex-col justify-start items-start  bg-[#83acb0] ">
          <ul className="w-full flex sm:w-full sm:flex sm:justify-start sm:items-center sm:gap-1 sm:font-normal sm:text-[18px] sm:pt-2">
            <li className="sm:justify-center sm:items-center sm:hover:text-[#f98d2f]">
              <a
                className="flex sm:flex sm:justify-center sm:items-center sm:pl-2 sm:gap-1 xl:text-[1.5rem]"
                href=""
              >
                Home{" "}
                <FiChevronsRight className="pt-1 text-[1.4rem] sm:pt-1 sm:text-[1.4rem] sm:items-center xl:text-[1.5rem] " />
              </a>{" "}
            </li>
            <li className="sm:hover:text-[#f98d2f] xl:text-[1.5rem] sm:items-center">
              About
            </li>
          </ul>
        </div>
        <div className="pt-2rem sm:pt-[2rem] sm:justify-between sm:items-center lg:w-full xl:flex xl:justify-evenly xl:items-center xl:gap-6 animate-fadeInLeft ">
          <img
            className=" lg:w-full xl:w-[50%] xl:h-[35rem] "
            src={AboutImg2}
            alt=""
          />
          <p className="sm:pt-[1rem] sm:justify-between sm:items-center sm:text-start italic sm:pb-[1rem] md:pb-[1rem] lg:pb-[1rem] lg:text-[1.3rem] xl:w-[50%] xl:text-[1.2rem] 2xl:text-[1.3rem] ">
            Suguna Polytechnic College ( SPC ), Coimbatore was established in
            the year 1997 under the auspices of Suguna Charitable Trust founded
            in the year 1973 by the leading Industrialist Sri. G. Ramaswamy. The
            college is approved by the All India Council of Technical Education
            [ AICTE ] is located at 2 kms of the Coimbatore to Avinashi National
            Highway ( NH47 ), at Nehru Nagar, Kalapatti Road, Civil Aerodrame
            (P.O), Coimbatore – 641 014. <br />
            <br />
            The college was established in order to meet the emerging industrial
            need for qualified manpower and provide adequate facilities for
            training youth to become efficient, skillful technicians and
            engineers. <br />
            <br />
            Under the guidance and patronage of the correspondent
            Sri.V.Lakshminarayanaswamy and Smt. Suguna Lakshminarayanaswamy,
            Managing Trustee and Sri. Arun Ranganathan, CEO. The college has
            developed nexcellent facilities and resources that are exceptional
            in every way. The strength of the college can be attributed to the
            commitment of the Management, its team of experienced educators, its
            creative & dedicated students and the determination of the
            Management to make SPC a technical centre of excellence in the city.
          </p>
        </div>
        <div className="sm:pt-[2rem] sm:flex sm:flex-col sm:justify-between sm:items-center md:flex md:flex-col lg:w-full lg:flex lg:flex-col xl:flex xl:flex-row xl:justify-evenly xl:items-center pt-4">
          <p className="sm:pt-[1rem] sm:justify-between sm:items-center sm:text-start sm:order-last italic sm:pb-[1rem] md:order-last md:pb-[1rem] lg:pb-[1rem] lg:order-last lg:text-[1.3rem] xl:w-[50%] xl:pl-2 xl:text-[1.2rem] 2xl:text-[1.3rem]">
            Suguna Polytechnic College ( SPC ), Coimbatore was established in
            the year 1997 under the auspices of Suguna Charitable Trust founded
            in the year 1973 by the leading Industrialist Sri. G. Ramaswamy. The
            college is approved by the All India Council of Technical Education
            [ AICTE ] is located at 2 kms of the Coimbatore to Avinashi National
            Highway ( NH47 ), at Nehru Nagar, Kalapatti Road, Civil Aerodrame
            (P.O), Coimbatore – 641 014. <br />
            <br />
            The college was established in order to meet the emerging industrial
            need for qualified manpower and provide adequate facilities for
            training youth to become efficient, skillful technicians and
            engineers. <br />
            <br />
            Under the guidance and patronage of the correspondent
            Sri.V.Lakshminarayanaswamy and Smt. Suguna Lakshminarayanaswamy,
            Managing Trustee and Sri. Arun Ranganathan, CEO. The college has
            developed nexcellent facilities and resources that are exceptional
            in every way. The strength of the college can be attributed to the
            commitment of the Management, its team of experienced educators, its
            creative & dedicated students and the determination of the
            Management to make SPC a technical centre of excellence in the city.
          </p>
          <img
            className="lg:w-full xl:w-[50%] xl:h-[35rem] xl:pl-5 xl:order-last sm:order-first order-first"
            src={AboutImg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCollage;
