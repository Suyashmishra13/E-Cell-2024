import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Team from "./pages/Team";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Homepage from "./pages/Homepage";

import FooterData from "./data/Footer.json";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
      <Footer {...FooterData} />
    </>
  );
}

export default App;
