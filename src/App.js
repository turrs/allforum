import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainApp, Thread } from "./pages";
import { Login } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainApp />} />
        <Route exact path="/thread/:id" element={<Thread />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
