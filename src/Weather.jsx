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
  console.log(props.data);
  console.log(wind);
  return (
    <main className="pre">
      <div className="wrapper pre">
        <div className="col-fl-md-12 pre">
          <div className="wholeWeather pre">
            <div className="col-fl-md-8">
              <div className="singleWeatherImg">
                <div className="image">
                  <img
                    src="https://images.pexels.com/photos/3027216/pexels-photo-3027216.jpeg?cs=srgb&dl=photo-of-multi-coloured-hot-air-balloons-3027216.jpg&fm=jpg"
                    alt=""
                  />
                </div>
                <div className="text">
                  <span className="degree t-weight-900">
                    {temperature}&#176;{" "}
                  </span>
                  <span className="city t-weight-300">
                    {city} <br /> <span className="t-weight-100">{time}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-fl-md-4">
              <div className="singleWeather">
                <div className="countriesList">
                  <h4>Another Location</h4>
                  <hr />

                  <ul>
                    <li onClick={props.onClick}>Sanaa</li>
                    <li onClick={props.onClick}>London</li>
                    <li onClick={props.onClick}>Paris</li>
                    <li onClick={props.onClick}>Moscow</li>
                  </ul>
                </div>
                <div className="weatherListDetails">
                  <h4>Weather Deatails</h4>
                  <hr />

                  <div className="col-fl-md-6">
                    <ul>
                      <li>humidity</li>
                      <li>Pressure</li>
                      <li>Wind</li>
                      <li>Cloud</li>
                    </ul>
                  </div>
                  <div className="col-fl-md-6">
                    <ul>
                      <li>{humidity}</li>
                      <li>{pressure}</li>
                      <li>{wind}</li>
                      <li>{cloud}</li>
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
