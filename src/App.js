import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './view/home';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <Home />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
