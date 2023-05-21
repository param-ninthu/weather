import React, { useEffect, useState } from "react";
import { Button, Container, Form, Input } from "./homeElements";

const Home = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const getWeather = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8e1dca7d10efdb98ec902b89f9b2d354`
    );
    const record = await response.json();
    setData(record);
    console.log(record);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <Container $mode="primary">
      <Container $mode="secondary">
        <Form>
          <Input
            type="text"
            placeholder="Enter the location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button onClick={handleSubmit}>Search</Button>
          {data.main && (
            <div>
              <h1>{data.name}</h1>
              <h2>{data.main.temp}</h2>
              <h2>{data.weather[0].description}</h2>
            </div>
          )}
        </Form>
      </Container>
    </Container>
  );
};

export default Home;
