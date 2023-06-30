import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Llamada al componente Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agrega más rutas y componentes aquí según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
