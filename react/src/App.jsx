import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile'
import Button from './Components/Button/Button'
import list from './Components/Data/Data'


function App() {
const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false)
const hasNext = index < list.length - 1
function handleNextClick(){
 if(hasNext){
   setIndex(index + 1);
 } else{
  setIndex(0)
 }
}

function handleMoreClick(){
setShowMore(!showMore)
}

 let sculpture = list[index];
return (
  <>
   <button onClick={handleNextClick}>Next</button>
   <h2>{sculpture.name} by {sculpture.artist}</h2>
   <h3>({index +1} of {list.length})</h3>
   <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
   {showMore && <p>{sculpture.description}</p>}
   <img src={sculpture.url} alt={sculpture.alt} />
  </>
);
}




export default App
