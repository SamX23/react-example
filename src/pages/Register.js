import { useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { auth } from "../services/firebase";

const Register = () => {
  const [state, setState] = useState({});
  const history = useHistory();

  const set = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleRegister = (event) => {
    const { email, password } = state;
    event.preventDefault();
    if (!email || !password) return alert("please insert missing credentials!");
    auth.createUserWithEmailAndPassword(email, password).then((e) => {
      console.log("Success : ", e);
      history.push("/");
      localStorage.setItem("login", JSON.stringify(state));
    });
  };

  return (
    <Container>
      <form onSubmit={handleRegister}>
        <input type="email" onChange={set("email")} />
        <input type="password" onChange={set("password")} />
        <input type="submit" />
      </form>
    </Container>
  );
};

export default Register;
