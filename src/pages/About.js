import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Redirect, useHistory, withRouter } from "react-router";
import Navigation from "../component/Navigation";

const About = () => {
  const [state, setState] = useState({ isAuthenticated: false });

  let history = useHistory();

  const checkUser = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return setState({ isAuthenticated: true });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      {!state.isAuthenticated ? (
        <Redirect to="/login" />
      ) : (
        <>
          <Navigation />
          About
          <Button onClick={handleLogout} variant="danger">
            Logout
          </Button>
        </>
      )}
    </>
  );
};

export default withRouter(About);
