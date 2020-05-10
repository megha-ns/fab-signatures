import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Main from "../layouts/Main";
import { Card, ListGroup } from "react-bootstrap";
import Event from "../components/Activites/events";

const Activites = () => (
  <Main>
    <Helmet title="Activites fs-wardha" />

    <article className="post" id="activites">
      <header>
        <div className="title">
          <h2>
            <Link to="/activities">Events & Activites</Link>
          </h2>
        </div>
      </header>

     
        
        <Event></Event>
     
    </article>
  </Main>
);

export default Activites;
