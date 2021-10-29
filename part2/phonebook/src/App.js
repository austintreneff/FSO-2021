import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/personsService'
import AddedNotification from './components/AddedNotification'
import ErrorNotifcation from './components/ErrorNotication'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ addedMessage, setAddedMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

  const hook = () => {
    personsService
      .getAll()
      .then(initalPersons => {
        console.log(initalPersons)
        setPersons(initalPersons)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <AddedNotification message={addedMessage}/>
      <ErrorNotifcation message={errorMessage}/>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      <h2>Add new:</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} setAddedMessage={setAddedMessage}/>
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} newFilter={newFilter} setErrorMessage={setErrorMessage}/>
    </div>
  )
}

export default App