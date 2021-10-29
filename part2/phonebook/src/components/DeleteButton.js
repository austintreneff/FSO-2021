import React from 'react'
import personsService from '../services/personsService'

const DeleteButton = ({ person, persons, setPersons, setErrorMessage }) => {
  const handleClick = (person, persons, setPersons) => {
    if (window.confirm(`Delete ${person.name}`)) {
      console.log(`Delete ${person.name}`)
      personsService
        .remove(person.id)
        .then(() => setPersons(
          persons.filter(personElement => personElement.id !== person.id)
        ))
        .catch(error => {
          setErrorMessage(`Information of ${person.name} has already been removed from server`)
          setTimeout(() => setErrorMessage(null), 5000)
          setPersons(persons.filter(personElement => personElement.id !== person.id))
        })
    }
  }

  return <button onClick={() => handleClick(person, persons, setPersons)}>delete</button>
}



export default DeleteButton