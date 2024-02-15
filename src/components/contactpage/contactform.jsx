import { useEffect } from "react";

const ContactForm = () => {
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
          formId: "6abc9664-c888-4a12-bc5b-6f16e820659f",
          target: "#hubspot",
        });
      }
    });
  }, []);

  return (
    <>
      <div className="mb-[4rem] ">
        <div className="">
          <h1 className="text-start font-bold w-[11rem] text-[2rem] border-b-[3px] border-b-orange-400">
            For Enquiry
          </h1>
        </div>
        <div className="w-[30rem] px-[5%] bg-[#f8e4d2] py-6 mt-5 ">
          <div id="hubspot" className="text-center "></div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
