import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile'
import Button from './Components/Button/Button'
import list from './Components/Data/Data'
import getFinalState from './Components/ProcessQueue'


function App() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}



export default App
