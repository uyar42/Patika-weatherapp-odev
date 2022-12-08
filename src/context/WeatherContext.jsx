import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const WeatherContext = createContext(); 

export const WeatherProvider = ({ children }) => {
  // const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([{}]);



  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: 'London', days: '3'},
    headers: {
      'X-RapidAPI-Key': 'a041da5f6cmsh2ec79618f73cd3fp1aa6e0jsnb80ca42c35e3',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  // axios.request(options).then(function (response) {
  //   setWeatherData(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

const values = {
  weatherData,setWeatherData,
  options,
}



  return <WeatherContext.Provider value={values} >{children}</WeatherContext.Provider>;
};

export const useWeather = () => useContext(WeatherContext);
