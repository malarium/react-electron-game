import React, { MutableRefObject, useEffect, useRef } from 'react';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import '../../assets/Vollkorn_SC/VollkornSC-Black.ttf';
import '../../assets/Vollkorn_SC/VollkornSC-Bold.ttf';
import '../../assets/Vollkorn_SC/VollkornSC-Regular.ttf';
import '../../assets/Vollkorn_SC/VollkornSC-SemiBold.ttf';
import './App.css';
import { InitialScreen } from './gameScreens/InitialScreen';
import introUrl from '../../assets/music/intro_music.wav';
import introUrl2 from '../../assets/music/musiccc.mp3';

export const Hello = () => {
  useEffect(() => {
    const music = new Audio(introUrl2);
    // setTimeout(() => {
    //   music.play();
    // }, 2000);
    music.play();
    return () => {
      music.pause();
    };
  });
  const navigate = useNavigate();
  return (
    <div className="main">
      <h1>The Big&nbsp;&nbsp;Day</h1>
      <span className="pointer" onClick={() => navigate('/initial-screen')}>
        &rarr;
      </span>
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
