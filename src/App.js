import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import "./STYLING/kvass.css";
import "./STYLING/style.css";

const App = () => {
  const [name, setName] = useState("Sanaa");
  const [data, setData] = useState(null);
  const handelChange = e => {
    setName(e.target.innerText);
    console.log(name);
  };
  const fetchData = async name => {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=0fd8ae9d5247af3922b8324c7aeac035&query=${name}`
    );
    setData(await response.json());
  };
  useEffect(() => {
    fetchData(name);
  }, [name]);

  if (!data) return <h1>Loading ...</h1>;
  const finalData = {
    temperature: data.current.temperature,
    time: data.location.localtime,
    city: data.location.name,
    desc: data.current.weather_descriptions,
    cloud: data.current.cloudcover,
    pressure: data.current.pressure,
    humidity: data.current.humidity,
    wind: data.current.wind_speed
  };
  return (
    <div>
      <Weather data={finalData} onClick={handelChange} />
    </div>
  );
};

export default App;
