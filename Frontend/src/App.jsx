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
import SelectTemplate from "./components/Sections/UserDashboard/SelectTemplate";
import LoginAs from "./components/Sections/UserDashboard/LoginAs";
import Admin from "./components/Sections/AdminPanel/Admin";
import AdminBlog from "./components/Sections/AdminPanel/AdminBlog";
import AdminTemplate from "./components/Sections/AdminPanel/AdminTemplate";
import Feedback from "./components/Sections/AdminPanel/Feedback";
import Subscription from "./components/Sections/AdminPanel/Subscription";
import Stepper from "./components/Sections/UserDashboard/Stepper";
import Users from "./components/Sections/AdminPanel/Users";
import CertificateForm from "./components/Sections/UserDashboard/CertificateForm";
import EducationForm from "./components/Sections/UserDashboard/EducationForm";
import PersonalInfoForm from "./components/Sections/UserDashboard/PersonalInfo";
import SkillForm from "./components/Sections/UserDashboard/SkillForm";
import Project from "./components/Sections/UserDashboard/Project";
import SummaryObjective from "./components/Sections/UserDashboard/SummaryObjective";
import ResumeForm from "./components/Sections/UserDashboard/ActualResume";
import ActualResumePreview from "./components/Sections/UserDashboard/ResumePreview";
import { ResumeProvider } from "./components/Sections/UserDashboard/ResumeContext";
import FresherResumePreview from "./components/Sections/UserDashboard/FresherResumepreview";

function App() {
  return (
    <ResumeProvider>
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
          <Route path="/select-template" element={<SelectTemplate />} />
          <Route path="/login-as" element={<LoginAs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-blog" element={<AdminBlog />} />
          <Route path="/admin-template" element={<AdminTemplate />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/users" element={<Users />} />
          <Route path="/certificate" element={<CertificateForm />} />
          <Route path="/education" element={<EducationForm />} />
          <Route path="/login-as" element={<LoginAs />} />
          <Route path="/personal-info" element={<PersonalInfoForm />} />
          <Route path="/project" element={<Project />} />
          <Route path="/stepper" element={<Stepper />} />
          <Route path="/summary" element={<SummaryObjective />} />
          <Route path="/skills" element={<SkillForm />} />
          <Route path="/actualresume" element={<ResumeForm />} />
          <Route path="/admintemplates" element={<AdminTemplate />} />
          <Route path="/adminblog" element={<AdminBlog />} />
          <Route path="/adminusers" element={<Users />} />
          <Route index element={<Admin.DashboardContent />} />
          <Route
            path="/actualresumepreview/:id"
            element={<ActualResumePreview />}
          />
          <Route
            path="/fresherresumepreview/:resumeId"
            element={<FresherResumePreview />}
          />
        </Routes>
      </Router>
    </ResumeProvider>
  );
}

export default App;
