import { useState } from 'react';
import './App.css';

function App() {
  const [isColorChanged, setIsColorChanged] = useState(false);

  const colorClassName = isColorChanged ? 'red' : '';

  const colorButtonClick = () => {
    const newValue = !isColorChanged;

    setIsColorChanged(newValue);
  };

  return (
    <>
      <div class="container">
        <button className="button" onClick={colorButtonClick}>
          Change the box background to
          {isColorChanged ? ' "gray"' : ' "red"'}
        </button>
        <button className="button warning">Make the box becomes bigger</button>
        <button className="button danger">Hide the box</button>
      </div>
      <div className={`box ${colorClassName}`} />
    </>
  );
}

export default App;
