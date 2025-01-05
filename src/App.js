import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="home" element={<FrontPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
