import "./App.css";

// Import Components
import Navbar from "./components/Navbar";

// Import Pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
