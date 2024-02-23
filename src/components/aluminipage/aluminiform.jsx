import { useEffect } from "react";

const AluminiForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    document.head.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "45241806",
          formId: "ea142106-efaf-49f9-9678-aca76f69af7d",
          target: "#hubspot",
        });
      }
    });
  }, []);

  return (
    <div>
      <div className="mb-[4rem] ">
        <div className="">
          <h1 className="text-start font-bold w-[11rem] text-[2rem] border-b-[3px] border-b-orange-400">
            Alumini Registration
          </h1>
        </div>
        <div className="w-[30rem] px-[5%] bg-[#f8e4d2] py-6 mt-5 ">
          <div id="hubspot" className="text-center "></div>
        </div>
      </div>
    </div>
  );
};

export default AluminiForm;
