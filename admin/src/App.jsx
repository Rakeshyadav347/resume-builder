import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Templates from "./components/Pages/Templates";
import Resources from "./components/Pages/Resources";
import PricingPage from "./components/Pages/PricingPage";
import ContactUs from "./components/Pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
