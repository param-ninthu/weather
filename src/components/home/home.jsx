import React, { useEffect, useState } from "react";
import { Button, Container, Form, Input } from "./homeElements";

const Home = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=8e1dca7d10efdb98ec902b89f9b2d354`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [location]);
  return (
    <Container $mode="primary">
      <Container $mode="secondary">
        <Form>
          <Input
            type="text"
            placeholder="Enter the location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Home;
