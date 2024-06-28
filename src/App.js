import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Building from './pages/Building/Building';
import Home from './pages/Home/Home';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learning from './pages/Learning/Learning';
import Advising from './pages/Advising/Advising';
import Coaching from './pages/Coaching/Coaching';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/building" element={<Building />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/advising" element={<Advising />} />
          <Route path="/coaching" element={<Coaching />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
