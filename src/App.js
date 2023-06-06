import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Footer from './components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/menu' exact Component={Menu} />
          <Route path='/about' exact Component={About} />
          <Route path='/contact' exact Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
