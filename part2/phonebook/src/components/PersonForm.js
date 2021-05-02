import React from 'react'

const PersonForm = (props) => {

  const addEntry = (event) => {
    event.preventDefault()
    if(!checkNameExists(props.newName)) {
      props.setPersons(props.persons.concat({ name: props.newName, number: props.newNumber}))
    }
    props.setNewName('')
    props.setNewNumber('')
  }

  const checkNameExists = (name) => {
    if(props.persons.filter(obj => obj.name === name).length > 0) {
      alert(`{name} is already added to phonebook...`)
      return true;
    } 
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    props.setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    props.setNewNumber(event.target.value)
  }
  
  return (
    <form onSubmit={addEntry}>
      <div>
        name: <input value={props.newName} onChange={(event) => handleNameChange(event)}/>
      </div>
      <div>
        number: <input value={props.newNumber} onChange={(event) => handleNumberChange(event)}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm