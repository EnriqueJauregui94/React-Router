import React from 'react';
import BlueComponent from './Blue.jsx';
import RedComponent from './Red.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; // Corrected import

export default function MainContainer() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/blue" element={<BlueComponent />} />
                <Route path="/red" element={<RedComponent />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}
