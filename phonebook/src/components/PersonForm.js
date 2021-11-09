import React from 'react'
import personsService from '../services/personsService'

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, setAddedMessage}) => {

  const addEntry = (event) => {
    event.preventDefault()
    if(checkNameExists(newName)) {
      const existingUser = checkNameExists(newName)
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsService
          .update(existingUser.id, {...existingUser, number: newNumber})
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
          })
      }
    } else {
      personsService
        .create({ name: newName, number: newNumber})
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson))
          setAddedMessage(`Added ${addedPerson.name}`)
          setTimeout(() => setAddedMessage(null), 5000)
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const checkNameExists = (name) => {
    return persons.find(obj => obj.name.toLowerCase() === name.toLowerCase())
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  return (
    <form onSubmit={addEntry}>
      <div>
        name: <input value={newName} onChange={(event) => handleNameChange(event)}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={(event) => handleNumberChange(event)}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm