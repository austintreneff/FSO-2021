import React from 'react'

const Persons = ({persons, newFilter}) => {

  return (
    <div>
      {
        persons
        .filter(obj => obj.name.toLowerCase().includes(newFilter))
        .map(person => (
          <div key={person.name}>{person.name} {person.number}</div>
        ))
      }
    </div>
  )
}

export default Persons