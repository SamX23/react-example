import { useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory, withRouter } from "react-router";
import Navigation from "../component/Navigation";

class Response extends String {
  json = () => JSON.parse(this);
}

const mockFetch = (url, { body }) => {
  const { email, password } = body;
  if (email !== "admin@admin.com" || password !== "password") {
    return Promise.reject("Email atau password salah!");
  } else {
    return Promise.resolve(
      new Response(JSON.stringify({ accessToken: "Ini token" }))
    );
  }
};

const Login = () => {
  const [state, setState] = useState({ email: null, password: null });

  let history = useHistory();

  const set = (name) => (event) => setState({ [name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;

    mockFetch("https://api.example.com/v1/auth/login", {
      body: { email, password },
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("token", json.accessToken);
        history.push("/");
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <Navigation />
      <Container>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" name="email" onChange={set("email")} />
          </label>
          <label>
            Password
            <input type="password" name="password" onChange={set("password")} />
          </label>

          <input type="submit" value="submit" />
        </form>
      </Container>
    </>
  );
};

export default withRouter(Login);
