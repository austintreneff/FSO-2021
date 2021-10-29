import React from 'react'

const ErrorNotifcation = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className='errorNotification'>{message}</div>
}

export default ErrorNotifcation