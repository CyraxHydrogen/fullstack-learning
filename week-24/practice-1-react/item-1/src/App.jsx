import React from 'react';
import './App.css';
function App() {
  const onclick = () => {
    alert('A button is clicked');
  };
  return (
    <div className="container">
      <button className="button" onClick={onclick}>
        click me to open alert
      </button>
    </div>
  );
}
export default App;
