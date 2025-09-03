import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Templates from "./components/Pages/Templates";
import Resources from "./components/Pages/Resources";
import PricingPage from "./components/Pages/PricingPage";
import ContactUs from "./components/Pages/ContactUs";
import Login from "./components/Sections/UserDashboard/Login";
import ForgotPassword from "./components/Sections/UserDashboard/ForgotPassword";
import EmailVerification from "./components/Sections/UserDashboard/EmailVerification";
import ResetPassword from "./components/Sections/UserDashboard/ResetPassword";
import PasswordChanged from "./components/Sections/UserDashboard/PasswordChanged";
import SignUp from "./components/Sections/UserDashboard/SignUp";
import Choose from "./components/Sections/UserDashboard/Choose";
import CreateResume from "./components/Sections/UserDashboard/CreateResume";
import Experience from "./components/Sections/UserDashboard/Experience";
import ResumeDashboard from "./components/Sections/UserDashboard/ResumeDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-changed" element={<PasswordChanged />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/create-resume" element={<CreateResume />} />
        <Route path="/experience" element={<Experience />} />
         <Route path="/resume-dashboard" element={<ResumeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
