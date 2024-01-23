import React from "react";
import "./App.css";
import FooterPage from "./components/footerpage/footer";
import ContactPage from "./components/contactpage/contact";
import NavBarPage from "./components/navbarpage/navbar";

function App() {
  return (
    <>
      <div>
        <NavBarPage></NavBarPage>
      </div>
      <div>
        <ContactPage></ContactPage>
      </div>
      <div>
        <FooterPage></FooterPage>
      </div>
    </>
  );
}

export default App;
