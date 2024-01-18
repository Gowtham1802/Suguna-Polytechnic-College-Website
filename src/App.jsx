import React from "react";
import "./App.css";
import FooterPage from "./components/footerpage/footer";
import ContactPage from "./components/contactpage/contact";

function App() {
  return (
    <>
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
