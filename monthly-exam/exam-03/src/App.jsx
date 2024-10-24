import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import '@fontsource-variable/suse';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="cover"></div>
      <div className="content">
        <div className="header">Seems like heaven</div>
        <div className="quote">
          "Just when you're in heaven, life hands you a pair of running shoes!"
        </div>
        <div className="text">
          <div>
            <span className="big-m"></span>
            <p>
              ax had always dreamed of the perfect Sunday: cozy bed, snacks
              within reach, and every streaming service at his fingertips.
              Today, that dream was finally coming true. He had stocked up on
              popcorn, candy, and enough soda to float a small boat.
            </p>
            <p>
              Wrapped in his softest blanket, he flicked on the TV and sank into
              the cushions. "This," he thought, "is heaven."
            </p>
          </div>
          <div>
            <p>
              Just as Max found the perfect movie, his phone buzzed. It was a
              message from his friend Lisa: "Ready for our 5K run?" Max's eyes
              widened in horror.
            </p>
            <p>
              He had completely forgotten! With a groan, he looked from the TV
              to his running shoes by the door. "Well," he sighed, "it seemed
              like heaven... while it lasted!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
