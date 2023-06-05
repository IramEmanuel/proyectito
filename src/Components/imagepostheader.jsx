import React from "react";
import "../CSSYLES/imagen.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const ImagePostHeader = () => {
  return (
    <div className="container">
        <div className="flechitas"><FontAwesomeIcon size="2xl" icon={faChevronLeft} /></div>
        <div className="image">
            <div className="Texto">Don't be part of the problem, be part of the solution that helps us all.</div> 
        </div>
         <div className="flechitas2"><FontAwesomeIcon size="2xl" icon={faChevronRight} /></div>
    </div>
  );
};

export default ImagePostHeader;