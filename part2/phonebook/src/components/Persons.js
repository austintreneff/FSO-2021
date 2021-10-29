import React from 'react'
import DeleteButton from './DeleteButton'

const Persons = ({persons, setPersons, newFilter, setErrorMessage}) => {

  return (
    <div>
      {
        persons
          .filter(obj => obj.name.toLowerCase().includes(newFilter.toLowerCase()))
          .map(person => (
            <div key={person.name}>
              {person.name} {person.number} <DeleteButton person={person} persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage}/>
            </div>
          ))
      }
    </div>
  )
}

export default Persons