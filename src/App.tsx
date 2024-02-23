// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// pages
import Home from './Pages/Home/Home';
import Order from './Pages/Order/Order';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';

// static components
import HeaderNavbar from './Components/HeaderNavBar/HeaderNavBar';
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <HeaderNavbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;
