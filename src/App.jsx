import React from "react";
import "./App.css";
import FooterPage from "./components/footerpage/footer";
import ContactPage from "./components/contactpage/contact";
import NavBarPage from "./components/navbarpage/navbar";
import AboutCollage from "./components/aboutpage/about";

function App() {
  return (
    <>
      {/* <div>
        <NavBarPage></NavBarPage>
      </div> */}
      {/* <div>
        <ContactPage></ContactPage>
      </div> */}
      <div>
        <AboutCollage></AboutCollage>
      </div>
      {/* <div>
        <FooterPage></FooterPage>
      </div> */}
    </>
  );
}

export default App;
