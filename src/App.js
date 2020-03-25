import React, {useState} from 'react';
import './App.scss';
import Mars from './organisms/Mars';
import Controls from './organisms/Controls';

const App = () => {
  const [rovers, setRovers] = useState([]);

  const updateRovers = rovers => setRovers(rovers);

  return (
    <div className="app">
      <h1 className="app__title">The Wedding Shop (Mars Rover)</h1>
      <div className="app__container">
        <Controls
          dimension={[6, 6]}
          onUpdate={updateRovers}
        />

        <Mars
          dimension={[6, 6]}
          rovers={rovers}
        />
      </div>
    </div>
  )
}

export default App;
