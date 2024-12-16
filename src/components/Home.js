import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import personData from "./persondata";
import Header from "./header";
import Main from "./main";
import Buttons from "./buttoms";

const Home = () => {

  const [data, setData] = useState([]);
  const showData = () => {
    setData(personData);
  };
  const removeData = () => {
    setData([]);
  };
  
  return (
    <Container className="font body p-0">
      <Header count={data} />
      <Main person={data} />
      <Buttons showDatafan={showData} removeDatafan={removeData} />
    </Container>
  );
};

export default Home;
