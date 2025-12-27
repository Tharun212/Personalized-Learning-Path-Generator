import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import Roadmap from "./pages/Roadmap";
import QuizPage from "./pages/QuizPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/quiz/:subject" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
