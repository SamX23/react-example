import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AlertComponent from "./AlertComponent";
import Navigation from "./Navigation";
import "./style.css";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((e) => {
      setData(e.data);
      console.log(e.data);
    });
  }, []);
  return (
    <>
      <Navigation />
      <Container className="container--center text-center">
        <AlertComponent />
        {data ? data.map((e, key, index) => <p key={key}>{e.title}</p>) : null}
      </Container>
    </>
  );
};

export default Home;
