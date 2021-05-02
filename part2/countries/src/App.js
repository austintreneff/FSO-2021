import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  
  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log(response.data)
      setCountries(response.data)
    })
  }
  
  useEffect(hook, [])


  return (
    <div>
      <Filter filter={filter} setFilter={setFilter}/>
      <Countries countries={countries} filter={filter} setFilter={setFilter}/>
    </div>
  );
}

export default App;
