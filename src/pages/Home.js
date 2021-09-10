import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AlertComponent from "../component/AlertComponent";
import Navigation from "../component/Navigation";
import Post from "../component/Post";
import "../styles/style.css";

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
        {data
          ? data.map((item, key) => <Post key={key} post={item.title} />)
          : null}
      </Container>
    </>
  );
};

export default Home;
