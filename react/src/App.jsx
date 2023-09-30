import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile'
import Button from './Components/Button/Button'
import list from './Components/Data/Data'


function App() {
function handleClick() {
  let bodyStyle = document.body.style;
  if (bodyStyle.backgroundColor === "black") {
    bodyStyle.backgroundColor = "white";
  } else {
    bodyStyle.backgroundColor = "black";
  }
}
return (
  <>
    <button onClick={handleClick}>Toggle the lights</button>
  </>
);
}




export default App
