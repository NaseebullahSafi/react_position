import React from 'react';
import './App.scss';
import Mars from './organisms/Mars';

const App = () => (
  <div className="App">
    <Mars dimension={[4, 5]} />
  </div>
)

export default App;
