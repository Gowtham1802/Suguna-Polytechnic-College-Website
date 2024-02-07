import React from "react";
import { ImCancelCircle } from "react-icons/im";
import DirectorImg from "../../../public/images/director-img/Director1.png";

const DirectorDetails = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] absolute z-[111111] flex justify-center items-center p-4">
        <div className=" flex justify-center items-center ">
          <div className="flex justify-between h-[25rem] w-[45rem] bg-[#F0FBFC] rounded-3xl relative pt-14">
            <div className="w-[40%]">
              <img
                src={DirectorImg}
                alt=""
                className="h-[15rem] w-[15rem] pl-5"
              />
              <div className="w-full text-center pr-6">
                <h5 className="font-bold text-xl pl-2">Mr.Arun Ranganathan</h5>
                <small className="font-bold text-sm">Director</small>
              </div>
            </div>
            <div className="w-[60%] font-serif text-[11px] pr-5 ">
              <p>
                The mind is everything. What you think you become –Buddha. To
                some, education is a path for attaining their dream. Learning is
                a life long journey our institution is only a stopover in your
                journey. Success of education depends on the quality of teamwork
                between teacher and student. Teacher expects the students to
                have the ability to learn. Curiosity is a one of the most
                important requirement for learning. Learning is not complete
                without application and solving problems. Technical knowledge
                with real world experience is available to all students studying
                in our institution. We help everyone who has the thirst for
                knowledge and encourage their passion to learn. As the famous
                saying, I have failed over and over and over again in my life.
                And that is why I succeed. Without failure there is no success.
                We prepare the students not to give-up on failures. Learning is
                not completed in classroom alone but also through various other
                activities.We let our students organize events like cultural,
                sports, education seminars, technical paper presentation, blood
                drive, inter-college functions, chess, volleyball and basketball
                competition. We have been entrusted the job of making
                intellectual out of ordinary and make them good citizen of this
                country. A person gathers mind ,spirit ,character and behavior
                from his environment. We build a good environment to encourage
                students to have fun and at the same time learn from the
                experienced teachers. A student will forget what he studied
                today but his habits, attitude, capability, responsibility,
                ideals will come to his personal growth for life. Work smart,
                drive safe and say no to drugs Best wishes
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

export default DirectorDetails;
