import { useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { auth, createUserWithEmailAndPassword } from "../services/firebase";

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
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log("User : ", user, " registered !");
        history.push("/");
        localStorage.setItem("login", JSON.stringify(state));
      }
    );
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
