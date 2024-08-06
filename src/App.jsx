import React from 'react';
// import Appnavigation from './routes/Appnavigation';
import HomePage from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
