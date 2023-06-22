import React from "react";
import "../CSSYLES/imagen.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ImagePostHeader = (props) => {
  const { image, text } = props;

  return (
    <div className="container">
      <div className="flechitas">
        <FontAwesomeIcon size="2xl" icon={faChevronLeft} />
      </div>
        <div className="Texto">{text}</div>
        <img className="image" src={image} alt="Post" />
      <div className="flechitas2">
        <FontAwesomeIcon size="2xl" icon={faChevronRight} />
      </div>
    </div>
  );
};

export default ImagePostHeader;