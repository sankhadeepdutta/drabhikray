import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<FrontPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
