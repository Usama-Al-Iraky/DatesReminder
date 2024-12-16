import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Buttons = ({showDatafan, removeDatafan}) => {
  return (
    <Row className="height-1">
          <Col className="d-flex justify-content-between px-5 align-items-center">
            <Button className="btn-danger h-50" onClick={showDatafan} >Show All Dates</Button>
            <Button className="btn-danger h-50" onClick={removeDatafan}>Remove Dates</Button>
          </Col>
        </Row>
  )
}

export default Buttons
