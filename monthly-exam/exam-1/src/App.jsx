import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const colors = ['red', 'green', 'blue', 'purple', 'orange', 'black'];

function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const currentColor = colors[colorIndex];
  const onButtonClick = () => {
    setColorIndex;
  };

  return (
    <div className={`content ${currentColor}`}>
      <button className="red" onClick={onButtonClick}>
        red
      </button>
      <button className="green" onClick={onButtonClick}>
        green
      </button>
      <button className="blue" onClick={onButtonClick}>
        blue
      </button>
      <button className="purple" onClick={onButtonClick}>
        purple
      </button>
      <button className="orange" onClick={onButtonClick}>
        orange
      </button>
      <button className="black" onClick={onButtonClick}>
        black
      </button>
      <div>Current color is: "${currentColor}"</div>
    </div>
  );
}

export default App;
