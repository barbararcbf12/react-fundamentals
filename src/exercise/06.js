// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

//ANSWER
function UsernameForm({onSubmitUsername}) {
  //EXTRA CREDIT 1 - ANSWER
  const inputRef = React.useRef()
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  const handleSubmit = event => {
    event.preventDefault()
    // onSubmitUsername(event.target.elements.username.value)
    onSubmitUsername(inputRef.current.value)
  }
  //EXTRA CREDIT 2 - ANSWER
  // const [error, setError] = React.useState('')
  // const handleChange = event => {
  //   let value = event.target.value
  //   const isValid = value === value.toLowerCase()
  //   setError( isValid ? null : 'Username must be lower case' )
  // }
  //EXTRA CREDIT 3 - ANSWER
  const [userName, setuserName] = React.useState('')
  const handleChange = event => {
    let value = inputRef.current.value
    const isValid = value === value.toLowerCase()
    setuserName( isValid ? value : value.toLowerCase() )
  }

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 replace input's name attribute with id attribute
  // 🐨 make sure to associate the label to the input. 
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:
          <input id="username" type="text" ref={inputRef} onChange={handleChange} value={userName} />
          {/* {error ? <div>{error}</div> : null} */}
        </label>
      </div>
      {/* <button type="submit" disabled={error ? true : false}>Submit</button> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
