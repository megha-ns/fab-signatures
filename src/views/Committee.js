import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Main from "../layouts/Main";

const Committee = () => {
  return (
    <Main>
      <Helmet title="About fs-wardha" />
      <article className="post" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">HOW TO APPLY</Link>
            </h2>
          </div>
        </header>

        <div className="container">
          <p>
            {" "}
            <strong>
              <span style={{ color: "#0073ff" }}>
                ARE YOU ALWAYS UP FOR A CHALLENGE? WE’RE LOOKING FOR YOU!
              </span>
            </strong>{" "}


 PREPARE
 AS A DESIGN-ORIENTED, RETAIL FASHION HOUSE, UDAYAN SIGNATURE OFFERS OPPORTUNITIES IN DIVERSE AREAS OF THE BUSINESS. BEFORE YOU APPLY FOR ANY POSITION, CONSIDER THE PASSION YOU HOLD FOR THE JOB, AND ITS COMPATIBILITY WITH YOUR SKILLSET.
 LEARN MORE ABOUT THE FUNCTIONS AND POSSIBILITIES AT UDAYAN SIGNATURE PRIVATE LIMITED.
 DISCOVER ALL AVAILABLE JOBS AT THE MOMENT.
 WHAT’S NEXT
 YOU WILL RECEIVE AN ACKNOWLEDGEMENT EMAIL FROM US ONCE YOU HAVE SUBMITTED YOUR CV. IF YOUR PROFILE MATCHES OUR REQUIREMENTS, YOU WILL BE CALLED IN FOR A SCREENING INTERVIEW.
 A SECOND AND FINAL PANEL INTERVIEW USUALLY FOLLOWS THE SCREENING INTERVIEW.
 {" "}
            <strong>
              <span style={{ color: "#ff0088" }}>
                WE ARE HAVING JOBS IN –
                MARKETING
                IT , E COMMERCE
                FINANCE
                LEGAL
                NETWORK EXPANSION
                FASHIONS AND DESIGNERS
                GRAPHICS DESIGNER
 EMAIL YOUR CV :</span> </strong>{" "}
            {" "}
            <strong>
              <span style={{ color: "#0073ff" }}>
                udayansignature@gmail.com
                         </span>
            </strong>{" "}
          </p>
        </div>
      </article>
    </Main>
  );
};

export default Committee;
