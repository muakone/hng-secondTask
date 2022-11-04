import './App.css';
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
