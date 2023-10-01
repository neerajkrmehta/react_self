import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile'
import Button from './Components/Button/Button'
import list from './Components/Data/Data'
import getFinalState from './Components/ProcessQueue'



function increment(n) {
  return n + 1;
}
increment.toString = () => "n => n+1";


function App() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

return (
  <div
    onPointerMove={(e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }}
    style={{
      position: "relative",
      width: "100vw",
      height: "100vh",
    }}
  >
    <div
      style={{
        position: "absolute",
        backgroundColor: "red",
        borderRadius: "50%",
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }}
    />
  </div>
);
}




export default App
