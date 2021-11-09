import React from 'react'


const Filter = ({newFilter, setNewFilter}) => {
  
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>Filter: <input value={newFilter} onChange={(event) => handleFilterChange(event)}/></div>
  )
}

export default Filter