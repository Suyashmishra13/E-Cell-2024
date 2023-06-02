import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Team from "./pages/Team";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import BlogsPage from "./pages/BlogsPage";

import FooterData from "./data/Footer.json";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/blogs" element={<BlogsPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer {...FooterData} />
    </>
  );
}

export default App;
