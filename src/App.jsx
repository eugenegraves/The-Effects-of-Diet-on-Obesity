import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from "./sections/welcome/Welcome";
import BaseDiscovery from "./sections/baseDiscovery/BaseDiscovery"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/discovery" element={<BaseDiscovery/>} />
      </Routes>
    </Router>
  );
}

export default App;
