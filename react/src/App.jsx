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

return (
  <>
    <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
    <hr />
    <TestCase
      baseState={0}
      queue={[increment, increment, increment]}
      expected={3}
    />
    <hr />
    <TestCase baseState={0} queue={[5, increment]} expected={6} />
    <hr />
    <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
  </>
);
}
function TestCase({ baseState, queue, expected }) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(", ")}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}
      >
        Your result: <b>{actual}</b> (
        {actual === expected ? "correct" : "wrong"})
      </p>
    </>
  );
}





export default App
