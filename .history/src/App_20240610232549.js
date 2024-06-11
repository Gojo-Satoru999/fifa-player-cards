// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList';

const App = () => {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;
