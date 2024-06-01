import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import MultiStepForm from './components/Form/MultiStepForm';
import './App.scss';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/form" element={<MultiStepForm />} />
            <Route path="*" element={(<div className='center'><h1>Page does not exist</h1></div>)} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
