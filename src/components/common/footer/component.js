import React from "react";


const FooterComponent = (props) => {
  return (
    <div className="container footer-wrapper">
      <div className="my-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="small px-3 px-sm-5">
          <img className="" src={require("assets/svgs/logo_facebook.svg").default} alt="1" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="small px-3 px-sm-5">
          <img className="" src={require("assets/svgs/logo_instagram.svg").default} alt="1" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="small px-3 px-sm-5">
          <img className="" src={require("assets/svgs/logo_youtube.svg").default} alt="1" />
        </a>
      </div>
     
      <div className="small">
        <small>FliquaIndia &#174;</small>
      </div>
    </div>
  );
};

export default FooterComponent;
