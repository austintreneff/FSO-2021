import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Weather = ({country}) => {
  const [weather, setWeather] = useState('')
  const weatherstackApiKey = process.env.REACT_APP_API_KEY;

  const hook = () => {
    axios.get(`http://api.weatherstack.com/current?access_key=${weatherstackApiKey}&query=${country.capital}`)
    .then(response => {
      console.log(response)
      setWeather(response.data.current)
    })
  }

  useEffect(hook, [country.capital, weatherstackApiKey])

  return (
    <div>
      <h2>Weather in {country.name}</h2>
      <div><strong>temperature:</strong> {weather.temperature} celcius</div>
      <img src={weather.weather_icons} alt=''/>
      <div><strong>wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}</div>
    </div>
  )
}

export default Weather