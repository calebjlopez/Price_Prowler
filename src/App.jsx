import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Search from "./Pages/Search/Search";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
