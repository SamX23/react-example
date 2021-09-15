import { useState } from "react";
import { Container } from "react-bootstrap";
import { auth } from "../services/firebase";

const Register = () => {
  const [state, setState] = useState({});

  const set = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleRegister = (event) => {
    const { email, password } = state;
    event.preventDefault();
    if (!email || !password) return alert("please insert missing credentials!");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((e) => console.log("Success : ", e));
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
