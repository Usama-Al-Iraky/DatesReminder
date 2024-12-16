import React from "react";
import { Col, Row } from "react-bootstrap";

const Main = ({ person }) => {
  return (
    <div  className="bg-body height-2 scroll shadow rounded-4">
    <Row className="h-100" >
      <Col>
        <div className="px-3 py-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div
                  key={item.id}
                  className="height-3 d-flex border-bottom mt-2 pb-2"
                >
                  <img className="img" alt="image" src={item.img} />
                  <div className="mx-3 h-100">
                    <p className="text-center d-flex align-items-center p-0 m-0 h-50 fs-5 fw-medium">
                      {item.name}
                    </p>
                    <p className="text-center d-flex align-items-center p-0 m-0 h-50 fs-6 text-black-50">
                      {item.date}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="text-center pt-5 fs-4 fw-medium text-black-50">
              No Appointments
            </h2>
          )}
        </div>
      </Col>
    </Row>
    </div>
  );
};

export default Main;
