import { useState } from "react";
import { Button, Alert } from "react-bootstrap";

const AlertComponent = () => {
  const [state, setState] = useState({ danger: false });
  return (
    <>
      <Button
        variant="danger"
        className="my-4"
        onClick={(e) => setState({ danger: true })}
      >
        ALERT
      </Button>
      {state.danger && <Alert variant="danger">Be careful!</Alert>}
    </>
  );
};

export default AlertComponent;
