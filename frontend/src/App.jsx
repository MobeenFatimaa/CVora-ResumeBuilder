import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
        {/* Top Navigation Bar */}
        <Navbar />

        {/* Main Route Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<ResumeBuilder />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Bottom Footer */}
        <Footer />
      </div>
    </Router>
  );
}