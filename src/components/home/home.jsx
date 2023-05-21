import React, { useEffect, useState } from "react";
import { Button, Container, Form, Input } from "./homeElements";

const Home = () => {
  const [location, setLocation] = useState("");

  const getWeather = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  if (location) {
    getWeather();
  }

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
