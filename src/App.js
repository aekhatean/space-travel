import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";

// Import Pages
import Home from "./pages/Home";
import DesignSystem from "./pages/DesignSystem";

function App() {
  const homepage = useLocation().pathname === "/" ? "homepage-bg" : "";
  return (
    <div className={`App ${homepage}`}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/design" element={<DesignSystem />}></Route>
      </Routes>
    </div>
  );
}

export default App;
