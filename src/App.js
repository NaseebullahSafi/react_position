import React, {useState} from 'react';
import './App.scss';
import Mars from './organisms/Mars';
import Controls from './organisms/Controls';

const App = () => {
  const [rovers, setRovers] = useState([[0, 0]]);

  const updateRovers = rovers => setRovers(rovers);

  return (
    <div className="app">
      <h1 className="app__title">The Wedding Shop (Mars Rover)</h1>
      <div className="app__container">
        <Controls
          onUpdate={updateRovers}
        />

        <Mars
          dimension={[4, 5]}
          rovers={rovers}
        />
      </div>
    </div>
  )
}

export default App;
