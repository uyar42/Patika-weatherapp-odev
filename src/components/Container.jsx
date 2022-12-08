import React,{useState} from 'react'
import Header from './Header'
import {useWeather} from '../context/WeatherContext'
import axios from 'axios'


function Container() {
    const {weatherData,setWeatherData,options} = useWeather()
    // const [city, setCity] = useState("");
    // console.log(weatherData)


  return (
    
    <div  style={{color:"blue"}}>
        <Header>
        </Header>
        <hr></hr>
    


    
    </div>
  )
}

export default Container