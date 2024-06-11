// src/App.js

import React from 'react';

import Player from './components/Player';
import PlayersList from './components/PlayersList';
import players from './players';

const App = () => {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      {/* Test a single player */}
      <Player {...players[0]} />
      <hr />
      {/* Render the PlayersList */}
      <PlayersList />
    </div>
  );
};

export default App;
  // import 'bootstrap/dist/css/bootstrap.min.css';