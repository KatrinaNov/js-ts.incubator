import React from 'react';


export const User = () => {

  const deleteUser = () => {
    alert('User was deleted')
  }
  const saveUser = () => {
    alert('User was saved')
  }
  const onNameChanged = () => {
    console.log('name changed')
  }
  const focusLost = () => {
    console.log('focus lost')
  }
  return <div>
    <textarea onChange={onNameChanged} onBlur={focusLost}>Katrin</textarea>
    <button onClick={deleteUser}>Delete</button>
    <button onClick={saveUser}>Save</button>
  </div>
}