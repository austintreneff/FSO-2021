import React from 'react'

const AddedNotification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className='addedNotification'>{message}</div>
}

export default AddedNotification