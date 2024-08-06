import React from 'react';
import HomePage from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

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
