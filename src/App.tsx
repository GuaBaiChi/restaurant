// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// pages
import Home from './Components/Pages/Home/Home';
import Book from './Components/Pages/Book/Book';
import About from './Components/Pages/About/About';
import Contest from './Components/Pages/Contest/Contest';

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
            <Route path='/book' element={<Book />} />
            <Route path='/about' element={<About />} />
            <Route path='/contest' element={<Contest />} />
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
