import React from 'react';
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';
import Features from './components/Features';
import AddOwn from './components/AddOwn';
import Testimonials from './components/Testimonials'; 
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
      <Features />
      <AddOwn />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;