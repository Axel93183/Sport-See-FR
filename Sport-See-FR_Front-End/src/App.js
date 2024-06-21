import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar.js";
import Sidebar from "./components/Sidebar/Sidebar.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
