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
      <div className="container mx-auto mb-8 px-8">
        <Navbar />

      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/team" element={<Team />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer {...FooterData} />
    </>
  );
}

export default App;
