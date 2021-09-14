import { useState } from "react";
import { Container } from "react-bootstrap";
import app from "../services/firebase";

const Register = () => {
  const [state, setState] = useState({});

  const set = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleRegister = (event) => {
    const { email, password } = state;
    event.preventDefault();
    if (!email || !password) return alert("please insert missing credentials!");
    app.auth().createUserWithEmailAndPassword(email, password);
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
