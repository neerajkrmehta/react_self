import React from 'react'

function Button({onclickplay, onclickstop}) {
  return (
    <>
      <div>
        <button onClick={onclickplay}>
            Play Movie</button>
      </div>
      <br/>
      <div>
        <button onClick={onclickstop}>
            Stop Movie</button>
      </div>
    </>
  );
}

export default Button