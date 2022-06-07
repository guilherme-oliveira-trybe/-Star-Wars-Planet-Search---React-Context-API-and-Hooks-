import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvides';

function App() {
  return (
    <StarWarsProvider>
      <span>Hello, App!</span>
    </StarWarsProvider>
  );
}

export default App;
