import "./App.css";
// import Banner from "./pages/Banner";
// import Team from "./pages/Team";
// import Footer from "./pages/Footer";
// import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import Navbar from "./pages/Navbar";

// import BannerData from "./data/Banner.json";
// import BlogsData from './data/Blogs.json';
// import FooterData from "./data/Footer.json";

function App() {
  return (
    <div className="container mx-auto mb-8 px-8">
      <Navbar />
     
      </div>
    <div className="App">
      {/* <Banner {...BannerData}/> */}
      {/* <Team /> */}
      {/* <Blogs/> */}
      {/* <Footer {...FooterData}/> */}
      <Gallery />
    </div>
  );
}

export default App;
