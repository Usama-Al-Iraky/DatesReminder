import React from 'react'
import { Col, Row } from 'react-bootstrap'



const Header = ({count}) => {
  return (
      <Row className="height-1">
          <Col className="d-flex align-items-end px-3">
            <p className="fs-3 fw-bold text-dark"> The Available Appointments is {count.length} </p>
          </Col>
        </Row>
  )
}

export default Header
