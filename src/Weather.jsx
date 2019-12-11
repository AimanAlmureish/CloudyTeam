import React from "react";

const Weather = props => {
  console.log(props);
  const {
    temperature,
    time,
    city,
    desc,
    cloud,
    humidity,
    wind,
    pressure
  } = props.data;
  return (
    <main>
      <div className="wrapper">
        <div className="col-fl-md-12 pre">
          <div className="wholeWeather">
            <div className="col-fl-md-8">
              <div className="singleWeatherImg">
                <div className="image">
                  <img
                    src="https://www.dreamcatcherhdri.com/219-licence/ref001-dusk-veiled.jpg"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h1>
                    {temperature} {city} <br /> {time + desc}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-fl-md-4">
              <div className="singleWeather">
                <div className="countriesList">
                  <h4>Another Location</h4>
                  <hr />

                  <ul>
                    <li>country</li>
                    <li>country</li>
                    <li>country</li>
                    <li>country</li>
                  </ul>
                </div>
                <div className="weatherListDetails">
                  <h4>Weather Deatails</h4>
                  <hr />

                  <div className="col-fl-md-6">
                    <ul>
                      <li>country text</li>
                      <li>country</li>
                      <li>country</li>
                      <li>country</li>
                    </ul>
                  </div>
                  <div className="col-fl-md-6">
                    <ul>
                      <li>country text</li>
                      <li>country</li>
                      <li>country</li>
                      <li>country</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Weather;
