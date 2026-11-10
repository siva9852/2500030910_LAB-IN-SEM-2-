import React, { useState } from 'react';

function App() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState(0);

  function calculateArea() {
    setArea(Number(length) * Number(width));
  }

  return (
    <div>
      <h1>Area of Rectangle Calculator</h1>

      <label>Enter Length:</label><br />
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />

      <br /><br />

      <label>Enter Width:</label><br />
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateArea}>Calculate</button>

      <h2>Area: {area}</h2>
    </div>
  );
}

export default App;