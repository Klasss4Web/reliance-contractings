import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
