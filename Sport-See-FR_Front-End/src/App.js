import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";

import "./App.scss";

/**
 * App component sets up the main routing for the application.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/error" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
