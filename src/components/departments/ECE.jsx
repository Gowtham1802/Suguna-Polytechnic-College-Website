import React from "react";
import EcePage from "../../../public/images/Ece-page.jpg";
import { GiOnTarget } from "react-icons/gi";
import { GiAchievement } from "react-icons/gi";
import { MdOutlinePolicy } from "react-icons/md";
import HodImg from "../../../public/images/RAMESH-HOD.png";
const ECE = () => {
  return (
    <div className="p-4">
      <div className="relative w-full">
        <img src={EcePage} alt="" className="blur-[7px] w-screen" />
        <span
          className=" w-[30rem] text-[white] absolute top-[6rem] left-[0rem] font-bold
        sm:top-[7rem] sm:left-[1rem] sm:text-[2rem]
        md:top-[8rem] md:left-[13rem] md:text-[2.5rem] md:[90%]
        lg:top-[12rem] lg:left-[18rem] lg:text-[3.5rem]
        xl:top-[17rem] xl:left-[23rem] xl:text-[4rem]
        2xl:top-[rem] 2xl:left-[28rem] 2xl:text-[5rem]
        "
        >
          Electronics and Communication Engineering
        </span>
      </div>

      <div className="relative w-full">
        <h1 className="pt-4 text-[#f98d2f] text-[1.2rem] font-semibold lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem]">
          About The Department
        </h1>
        <p className="w-[100%] lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[2rem]">
          &nbsp; &nbsp; Electronics and Communication Engineering (ECE) is a
          discipline that focuses on the design, development, testing, and
          maintenance of electronic equipment used in various communication
          systems. In colleges, ECE programs cover a wide range of topics
          including analog and digital electronics, electromagnetic field
          theory, signal processing, communication systems, and microprocessor
          applications. Students in ECE programs learn how to design and analyze
          electronic circuits, develop communication networks, and work with a
          variety of electronic devices such as microcontrollers, sensors, and
          transmitters. The curriculum often includes hands-on laboratory work
          and projects to provide students with practical skills and experience.
          ECE programs in colleges also emphasize the importance of staying
          updated with the latest technologies and trends in the field, as
          electronics and communication systems continue to evolve rapidly.
          Graduates of ECE programs are well-prepared for careers in industries
          such as telecommunications, networking, broadcasting, and electronics
          manufacturing.
        </p>
      </div>

      <div
        className="w-full grid grid-row-3 grid-rows-1 gap-10 relative pt-5
      md:grid md:grid-cols-3 md:grid-rows-1 md:gap-5 p-4"
      >
        <div>
          <div className="">
            <GiOnTarget className=" h-[3rem] w-12 bg-[#f98d2f] rounded-tl-lg rounded-br-lg  p-2 text-[white]" />
            <h1 className="text-[1.2rem] font-semibold text-[#f98d2f] pt-1 lg:text-[2rem]">
              Vision
            </h1>
          </div>
          <p className="md:text-[16px] md:w-[100%] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]">
            &nbsp;&nbsp; Offer quality education in the field of Electronics and
            Communication Engineering to meet the challenges of Industry and
            society through a need based curriculum, Industry - Institute
            Interaction and student centric teaching learning process and
            produce diploma graduates with innovative and ethical standards.
          </p>
        </div>
        <div>
          <div className="">
            <GiAchievement className=" h-[3rem] w-12 bg-[#f98d2f] rounded-tl-lg rounded-br-lg  p-2 text-[white]" />
            <h1 className="text-[1.2rem] font-semibold text-[#f98d2f] pt-1 lg:text-[2rem]">
              Mission
            </h1>
          </div>
          <p className="md:text-[16px] w-[100%] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]">
            &nbsp;&nbsp; To develop need based curriculum by involving
            Industrial experts, academic experts and alumni periodically to meet
            the needs of the society.To train the faculty in the recent trends
            in Electronics and Communication Engineering and teaching
            methodologies so as to provide a conducive learning environment for
            students.
          </p>
        </div>
        <div>
          <div className="">
            <MdOutlinePolicy className=" h-[3rem] w-12 bg-[#f98d2f] rounded-tl-lg rounded-br-lg  p-2 text-[white]" />
            <h1 className="text-[1.2rem] font-semibold text-[#f98d2f] pt-1 lg:text-[2rem]">
              Quality Policy
            </h1>
          </div>
          <p className="md:text-[16px] w-[100%] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]">
            &nbsp;&nbsp; Suguna polytechnic college is committed impart quality
            technical education in the field of Engineering. The College stands
            for Academic Excellence, Good Discipline, Development of kills and
            Character formation of its Students to enable them serve the so
            society with commitments.
          </p>
        </div>
      </div>

      <div></div>

      <div className="">
        <img src={HodImg} alt="" />
      </div>
      <div>
        <h1>RAMESH T</h1>
        <h3>HOD OF ECE</h3>
      </div>
    </div>
  );
};

export default ECE;
