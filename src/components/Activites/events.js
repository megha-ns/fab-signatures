import React from "react";
import Table from "react-bootstrap/Table";
import data from "../../data/activites/activites";
import { Image } from "react-bootstrap";
const Event = () => (
  <div className="body">
    <div>
    
    </div>
    {data.images.map(src=>(
       <div className="shadow-lg p-3 mb-5 bg-white rounded activites-image">
              <Image src={src.img} fluid  key={src.id}/>
            </div>
    ))}
  
  </div>
  
);

export default Event;
