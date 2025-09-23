import React from 'react';
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
      <Features />
      {/* The rest of your application content goes here */}
    </div>
  );
}

export default App;