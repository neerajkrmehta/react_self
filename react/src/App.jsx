import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile'
import Button from './Components/Button/Button'
import list from './Components/Data/Data'
import getFinalState from './Components/ProcessQueue'


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + " " + e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <br />
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}


export default App
