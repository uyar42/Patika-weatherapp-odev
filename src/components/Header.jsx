import React, { useEffect, useState } from "react";
import { useWeather } from "../context/WeatherContext";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardImg } from "react-bootstrap";

function Header() {
  const cities = [
    { value: "İstanbul" },
    { value: "Bursa" },
    { value: "Ankara" },
    { value: "Konya" },
    { value: "Ağrı" },
    { value: "Kars" },
    { value: "Hatay" },
    { value: "Paris" },
    { value: "Saint Petersburg" },
  ];

  const { options, setWeatherData, weatherData } = useWeather();
  const [weatherCity, setWeather] = useState("İstanbul");
  const [hava, setHava] = useState();
  const [col, setCol] = useState("white");
  const [col2, setCol2] = useState("white");
  const [col3, setCol3] = useState("white");


  useEffect(() => {
    options.params.q = weatherCity;
    axios
      .request(options)
      .then((response) => {
        setHava(response.data.forecast);
        console.log(hava.forecastday[0])
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [weatherCity ]);

  const onChangeCity = (e) => {
    setWeather(e);
  };

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        Select City
      </h2>

      <div>
        <select
          style={{
            width: "320px",
            display: "flex",
            textAlign: "center",
            margin: "auto",
          }}
          onChange={(e) => onChangeCity(e.target.value)}
        >
          {cities.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <hr></hr>
        <span style={{ display: "flex", justifyContent: "center" }}>
          <h2>{weatherCity}</h2>
        </span>
        <br></br>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Card
            style={{ width: "18rem", borderColor: `${col}` }}
            onMouseEnter={() => setCol("blue")}
            onMouseLeave={() => setCol("white")}
          >
            <Card.Body>
              <Card.Title name="cardCity">
                {" "}
                {hava?.forecastday[0].day.avgtemp_c + "°"} --{" "}
                {hava?.forecastday[0].day.condition.text}
              </Card.Title>
              <Card.Text>
                {hava?.forecastday[0].date}
                <Card.Img
                  variant="top"
                  src={hava?.forecastday[0].day.condition.icon}
                />
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem", borderColor: `${col2}` }}
            onMouseEnter={() => setCol2("blue")}
            onMouseLeave={() => setCol2("white")}
          >
            <Card.Body>
              <Card.Title name="cardCity">
                {hava?.forecastday[1].day.avgtemp_c + "°"}--{" "}
                {hava?.forecastday[1].day.condition.text}
              </Card.Title>
              <Card.Text>
                {hava?.forecastday[1].date}
                <Card.Img
                  variant="top"
                  src={hava?.forecastday[1].day.condition.icon}
                />
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem", borderColor: `${col3}` }}
            onMouseEnter={() => setCol3("blue")}
            onMouseLeave={() => setCol3("white")}
          >
            <Card.Body>
              <Card.Title name="cardCity">
                {" "}
                {hava?.forecastday[2].day.avgtemp_c + "°"}--{" "}
                {hava?.forecastday[2].day.condition.text}
              </Card.Title>
              <Card.Text>
                {hava?.forecastday[2].date}
                <Card.Img
                  variant="top"
                  src={hava?.forecastday[2].day.condition.icon}
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Header;
