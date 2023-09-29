import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile'
import Button from './Components/Button/Button'
// import people from './Components/Data/Data'

function App() {

 
return (
  <>
    <Button 
    onclickplay={()=>alert('playing')}
    onclickstop={()=>alert('stoping')}
     />
  </>
);
}




export default App
