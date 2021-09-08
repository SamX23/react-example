import { useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Navigation from "./Navigation";

const Contact = () => {
  const [image, setImage] = useState();
  const files = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("upload success");
  };

  const handleFileChange = (e) => {
    const file = files.current.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        setImage(reader.result);
      },
      false
    );

    file.type.includes("image/") && reader.readAsDataURL(file);
  };

  return (
    <Container>
      <Navigation />
      <Container>
        {!!image && <img src={image} alt="preview" />}
        <Form onSubmit={handleSubmit}>
          <input
            type="file"
            name="photo"
            ref={files}
            onChange={handleFileChange}
          />
          <button type="submit" value="submit">
            Submit
          </button>
        </Form>
      </Container>
    </Container>
  );
};

export default Contact;
