import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import c1 from "../../image/c-1.png";
import c2 from "../../image/c-2.png";
import c3 from "../../image/c-3.png";
import c4 from "../../image/c-4.png";
import c5 from "../../image/c-5.png";
import "./Category.css";
const Category = () => {
  return (
    <div style={{ margin: "40px" }}>
      <Container>
        <Row>
          <Col>
            <div className="circle">
              <div  style={{ textAlign: "center" }}>
                <div>
                  <img src={c1} />
                </div>
                <div>
                  <strong>Bedroom</strong>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="circle">
              <div style={{ textAlign: "center" }}>
                <div>
                  <img src={c2} />
                </div>
                <div>
                  <strong>Living</strong>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="circle">
            <div  style={{ textAlign: "center" }}>
                <div>
                  <img src={c3} />
                </div>
                <div>
                  <strong>Dining</strong>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="circle">
            <div  style={{ textAlign: "center" }}>
                <div>
                  <img src={c4} />
                </div>
                <div>
                  <strong>Lounge</strong>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="circle">
              <div  style={{ textAlign: "center" }}>
                <div>
                  <img src={c5} />
                </div>
                <div>
                  <strong>Office Chair</strong>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
