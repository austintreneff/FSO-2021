import React from 'react'
import Weather from './Weather'

const Countries = ({countries, filter, setFilter}) => {
  const filteredCountries = countries.filter(obj => obj.name.toLowerCase().includes(filter.toLowerCase()))

  if (filteredCountries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  }

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return (
      <div>
        <h1>{country.name}</h1>
        <div>Capital: {country.capital}</div>
        <div>Population: {country.population}</div>
        <h2>Languages:</h2>
        <ul>
          {country.languages.map(language => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} width='400px' alt='country flag' />
        <Weather country={country} />
      </div>
    )
  }

  return (
    filteredCountries.map(country => (
      <div key={country.name}>
        {country.name} <button onClick={() => setFilter(country.name)}>show</button>
      </div>
    ))
  )
}

export default Countries;