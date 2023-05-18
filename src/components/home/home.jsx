import React from "react";
import { Container, Form } from "./homeElements";

const Home = () => {
  return (
    <Container $mode="primary">
      <Container $mode="secondary">
        {" "}
        <Form>
          <input type="text" placeholder="Enter the location" />
          <button type="submit">Search</button>
        </Form>{" "}
      </Container>
    </Container>
  );
};

export default Home;
