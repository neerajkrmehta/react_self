import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile'

function App() {
let person = {
  name: "neeraj",
  age: 23,
  location: "bhagalpur",
  experiance: "none",
};


return (
  <>
   

    <Profile name="neeraj"> Profile</Profile>
  </>
);
}




export default App
