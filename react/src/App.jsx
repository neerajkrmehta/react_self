import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile'
import people from './Components/Data/Data'

function App() {

 const chemists = people.filter((person) => person.profession === "chemist");

 const listItems = chemists.map((person) => (
   <li>
   
     <p>
     
       <b>{person.name}:</b>
       {" " + person.profession + " "}
       known for {person.accomplishment}
     </p>
   </li>
 ));
return (
  <>
   <ul>{listItems}</ul>
  </>
);
}




export default App
