import React, { MutableRefObject, useEffect, useRef } from 'react';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../../assets/Vollkorn_SC/VollkornSC-Black.ttf';
import '../../assets/Vollkorn_SC/VollkornSC-Bold.ttf';
import '../../assets/Vollkorn_SC/VollkornSC-Regular.ttf';
import '../../assets/Vollkorn_SC/VollkornSC-SemiBold.ttf';
import './App.css';
import { InitialScreen } from './gameScreens/InitialScreen';
import introUrl from '../../assets/music/intro_music.wav';

export const Hello = () => {
  useEffect(() => {
    const music = new Audio(introUrl);
    setTimeout(() => {
      music.play();
    }, 2000);

    return () => {
      music.pause();
    };
  });
  return (
    <div className="main">
      <h1>The Big&nbsp;&nbsp;Day</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/initial-screen" element={<InitialScreen />} />
      </Routes>
    </Router>
  );
}
