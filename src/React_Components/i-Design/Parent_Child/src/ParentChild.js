import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import "../css/ParentChild.css";

const ParentChild = () => {
  return (
    <div className="container-parent-child">
      <div className="header-parent-child">
        <Header />
      </div>
      <div className="mainContent-parent-child">
        <MainContent />
      </div>
      <div className="footer-parent-child">
        <Footer />
      </div>
    </div>
  );
};

export default ParentChild;
