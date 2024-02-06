import React from "react";
import { ImCancelCircle } from "react-icons/im";
import ChairmanImg from "../../../public/images/chairman-img/Chairman1.png";

const ChairmanDetails = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] absolute z-[111111] flex justify-center items-center p-4">
        <div className=" flex justify-center items-center ">
          <div className="flex justify-between h-[25rem] w-[45rem] bg-[#F0FBFC] rounded-3xl relative pt-14">
            <div className="w-[40%]">
              <img
                src={ChairmanImg}
                alt=""
                className="h-[15rem] w-[15rem] pl-5"
              />
              <div className="w-full text-center pr-6">
                <h5 className="font-bold text-xl pl-2">
                  Mr.V.Lakshiminarayanasamy
                </h5>
                <small className="font-bold text-sm">
                  Managing Director & Chairman
                </small>
              </div>
            </div>
            <div className="w-[60%] font-serif text-[11px] pr-5 ">
              <p>
                Suguna Polytechnic College is one among the various educational
                projects of Suguna Charitable Trust, born out of social
                Consciousness of the Founder in 1997. It is a forerunner among
                the several Educational Institutions run by the Trust. The quest
                to serve humanity made the Suguna Group of Industries establish
                the Suguna Charitable Trust way back in 1973. Since then the
                Trust has been taking up various projects in the areas of
                Education and Health-Care. ‘Education is the manifestation of
                the Divinity already present in man’ said Swami Vivekananda. The
                Management has put together a fully equipped campus with
                Internet Connectivity, LCD Projectors, state of the art
                laboratories etc., that help the students in learning. A free
                medical centre, a dental clinic and a multi purpose auditorium
                (Suguna Kalyana Mandapam) – all set up by the Trust meet the
                varied needs of the community. Our Memoranda of Understanding
                with various Industries and Institution are our major strength.
                Many of our students, who have successfully completed their
                studies in this Institutions are not only placed in our own
                industries but also in other reputable Industries and Companies
                like HCL, Sam Turbo, G–Plast Engineering, Craftsman Automation,
                Printronix, Microsen, Quattro Engineering, Vital Engineering
                bring high quality to their work and esteem to the nation and
                have done us proud. With steady steps, we continue our march
                forward. We look forward to meeting you here at Suguna
                Polytechnic College.
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

export default ChairmanDetails;
