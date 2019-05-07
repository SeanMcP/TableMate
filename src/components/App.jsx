import React from 'react';
import { GuestProvider } from '../store/GuestContext';
import GuestList from './GuestList';

function App() {
  return (
    <GuestProvider>
      <div className="App">
        Seating Chart
        <GuestList />
      </div>
    </GuestProvider>
  );
}

export default App;
