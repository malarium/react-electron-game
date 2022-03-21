import { MutableRefObject, useEffect, useRef } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import '../../assets/Vollkorn_SC/VollkornSC-Black.ttf';
import '../../assets/Vollkorn_SC/VollkornSC-Bold.ttf';
import '../../assets/Vollkorn_SC/VollkornSC-Regular.ttf';
import '../../assets/Vollkorn_SC/VollkornSC-SemiBold.ttf';
import './App.css';

const Hello = () => {
  return (
    <>
      <div className="Title">Title page</div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
