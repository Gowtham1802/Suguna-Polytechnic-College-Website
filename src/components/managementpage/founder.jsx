import { FiChevronsRight, FiArrowRight } from "react-icons/fi";
import FunderImg from "../../../public/images/founder-img/Foundernew.png";

const FounderDetails = () => {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <div className="sm:flex sm:items-center sm:justify-start  sm:bg-[#83acb0] sm:h-[3rem] w-full flex flex-col justify-start items-start  bg-[#83acb0] ">
          <ul className="w-full flex sm:w-full sm:flex sm:justify-start sm:items-center sm:gap-1 sm:font-normal sm:text-[18px] sm:pt-2">
            <li className="sm:justify-center sm:items-center sm:hover:text-[#03e1f5]">
              <a
                className="flex sm:flex sm:justify-center sm:items-center sm:pl-2 sm:gap-1 xl:text-[1.5rem]"
                href=""
              >
                Home{" "}
                <FiChevronsRight className="pt-1 text-[1.4rem] sm:pt-1 sm:text-[1.4rem] sm:items-center xl:text-[1.5rem] " />
              </a>{" "}
            </li>
            <li className="sm:hover:text-[#03e1f5] xl:text-[1.5rem] sm:items-center">
              About
            </li>
          </ul>
        </div>
        <div className="w-[100%] flex justify-start items-start text-center overflow-hidden ">
          <div className="w-[50%] overflow-hidden">
            <img className="w-[25rem] p-4" src={FunderImg} alt="" />
          </div>
          <div className="overflow-hidden w-[50%] justify-start">
            <p className="flex justify-start p-4">
              Sri.G.Ramaswamy started his career as a marketing person in a
              small organization at Chennai. He gained experience in meeting
              customers especially the farming community. He understood the
              demand for electric motors – a prime mover for machinery, pump or
              any moving engineering product. He started an enterprise at
              Coimbatore, the home-town for manufacturing Electric motors,
              products that are used for generations. He was also honoured with
              Rashtriya Samman Award by the Govt. of India for being the highest
              tax payer to the government for three consecutive years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderDetails;
