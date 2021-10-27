import React from 'react'
import personsService from '../services/personsService'

const DeleteButton = ({ person, persons, setPersons }) => {
  return <button onClick={() => handleClick(person, persons, setPersons)}>delete</button>
}

const handleClick = (person, persons, setPersons) => {
  if (window.confirm(`Delete ${person.name}`)) {
    console.log(`Delete ${person.name}`)
    personsService
      .remove(person.id)
      .then(() => setPersons(
        persons.filter(personElement => personElement.id !== person.id)
      ))
      .catch(error => {
        alert(
          `the person '${person.name}' was already deleted from server`
        )
        setPersons(persons.filter(personElement => personElement.id !== person.id))
      })
  }
}

export default DeleteButton