import React from "react";
import { Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testomonial.css";
import ReactStars from "react-rating-stars-component";
const Testomonial = ({ data }) => {
  const { name, comment, imageURL,rating } = data;
  return (
    <div className="col-md-4 mb-4 box-area">
      <div className="card">
        {/* <img src={images} alt="" className="card-img-top"/> */}
        <div className="card-body">
          <p>{comment}</p>
          <h5>by {name}</h5>
          <Col xs={6} md={4}>
            <Image
              style={{ width: "50px", height: "50px", textAlign: "center" }}
              src={imageURL}
              roundedCircle
            />
            <ReactStars
              count={rating}
              size={24}
              emptyIcon={<FontAwesomeIcon icon={faStar} />}
              Color="#ffd700"
            />
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
