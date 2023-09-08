import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BlueComponent from './Components/Blue'; // Import the BlueComponent
import RedComponent from './Components/Red'; // Import the RedComponent
import Home from './components/Home'; // Corrected import for the Home component
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <h1>React Router</h1>
        <div id="navbar">
          {/* Create Links for Blue and Red routes */}
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            {/* Use the BlueComponent for the "/blue" route */}
            <Route path="/blue" element={<BlueComponent />} />
            {/* Use the RedComponent for the "/red" route */}
            <Route path="/red" element={<RedComponent />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
