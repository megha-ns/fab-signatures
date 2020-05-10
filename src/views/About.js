import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

const About = () => {
  return (
    <Main>
      <Helmet title="About FS" />
      <article className="post" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Us</Link>
            </h2>
          </div>
        </header>

        <div className="container">
          <p>
          {" "}
            <strong>
              <span style={{ color: "#0073ff" }}>
              Udayan signature’s 
              </span>
            </strong>{" "}
          products stand out for quality, luxury and sophistication and are the fabrics of choice for the most important international fashion houses. Our brand “INDIA ENERGIA” represent our culture and fashion.
India energia is an emblem of Indian expertise, combining craft traditions and technological fashionable innovation for the best results at all times.
India Energia is a genuine Made in India brand which exports throughout the world but maintains a strong bond with its own land. India Energia is on path of Mahatma Gandhi and Udayan signature is working from the place Wardha (Maharashtra) which is known as Gandhi city. 
The uniqueness of Khadi can be traced back to indian freedom movement, wherein Mahatma Gandhi  promoted the spinning of Khadi for rural self‐employment and self‐reliance.  In this machine‐age, khadi  craftsmen work round the clock to produce the handspun fabric.  We, as citizens of the country, owe a  duty to promote and preserve our heritage for the value it holds to us and the generations to come.
Udayan signature supports sustainable practices and aims at nurturing the beauty of  traditional  craftsmanship. We emphasize on curating merchandise from best khadi brands across the globe with an  intent to deliver products that are unique, comfortable, and of heirloom quality. Udayan signature aims to generate employment for the artisans and weavers of this traditional art.
{" "}
            <strong>
              <span style={{ color: "#ff0088" }}>
              UDAYAN SIGNATURE WORKS WITH  INDIAN ETHICS AND MODERN APPEALS WITH A BRAND NAME “ INDIA ENERGIA” .  HAVING  ETHNIC WEAR IN KHADI  & COTTON. 
KHADI THE CLOTH IS USUALLY WOVEN FROM COTTON AND MAY ALSO INCLUDE SILK, OR WOOL, WHICH ARE ALL SPUN INTO YARN ON A SPINNING WHEEL CALLED A CHARKHA.
              </span>
            </strong>{" "}
  IT IS A VERSATILE FABRIC, COOL IN SUMMER AND WARM IN WINTER. IN ORDER TO IMPROVE THE LOOK, KHĀDĪ/KHADDAR IS SOMETIMES STARCHED TO GIVE IT A STIFFER FEEL. IT IS WIDELY ACCEPTED IN FASHION CIRCLES. ALSO WE ARE WORKING IN COTTON T-SHIRTS, SHIRTS AND ALL APPEALS. 
www.indiaenergia.com
          </p>
        </div>
      </article>
    </Main>
  );
};

export default About;
