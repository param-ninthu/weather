import React from "react";
import { Button, Container, Form, Input } from "./homeElements";

const Home = () => {
  return (
    <Container $mode="primary">
      <Container $mode="secondary">
        {" "}
        <Form>
          <Input type="text" placeholder="Enter the location" />
          <Button type="submit">Search</Button>
        </Form>{" "}
      </Container>
    </Container>
  );
};

export default Home;
