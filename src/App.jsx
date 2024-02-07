import React from "react";
import "./App.css";
import FooterPage from "./components/footerpage/footer";
import ContactPage from "./components/contactpage/contact";
import NavBarPage from "./components/navbarpage/navbar";
import AboutCollage from "./components/aboutpage/about";
import ManagementPage from "./components/managementpage/management";
import FounderDetails from "./components/managementpage/founder";
import ChairmanDetails from "./components/managementpage/chairman";
import TrusteeDetails from "./components/managementpage/trustee";
import DirectorDetails from "./components/managementpage/director";
import PrincipalDetails from "./components/managementpage/principal";
import DeanDetails from "./components/managementpage/dean";

function App() {
  return (
    <>
      {/* <div>
        <NavBarPage></NavBarPage>
      </div> */}
      {/* <div>
        <ContactPage></ContactPage>
      </div> */}
      {/* <div>
        <AboutCollage></AboutCollage>
      </div> */}
      {/* <div>
        <FooterPage></FooterPage>
      </div> */}
      <div>
        <ManagementPage></ManagementPage>
      </div>
      {/* <div>
        <FounderDetails></FounderDetails>
      </div> */}
      {/* <div>
        <ChairmanDetails></ChairmanDetails>
      </div> */}
      {/* <div>
        <TrusteeDetails></TrusteeDetails>
      </div> */}
      {/* <div>
        <DirectorDetails></DirectorDetails>
      </div> */}
      {/* <div>
        <PrincipalDetails></PrincipalDetails>
      </div> */}
      {/* <div>
        <DeanDetails></DeanDetails>
      </div> */}
    </>
  );
}

export default App;
