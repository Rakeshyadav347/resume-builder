import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Check from './Components/Home/Check'
import ResourcesDetails from './Components/Home/ResourcesDetails'
import Price from './Components/Home/Price'
import FAQ from './Components/Home/Question'
import Contact from './Components/Home/Contact'
import Stepper from './Components/Home/UserDashboard/personal_info'
import PersonalInfoForm from './Components/Home/UserDashboard/PersonalInfoForm'
import EducationForm from './Components/Home/UserDashboard/EducationForm'
import CertificateForm from './Components/Home/UserDashboard/CertificateForm'
import SkillForm from './Components/Home/UserDashboard/SkillForm'
import SummaryObjective from './Components/Home/UserDashboard/SummaryObjective'
import Project from './Components/Home/UserDashboard/Project'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Check />} />
        <Route path="/resources" element={<ResourcesDetails />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

        {/* User Dashboard / Forms */}
        <Route path="/stepper" element={<Stepper />} />
        <Route path="/personal-info" element={<PersonalInfoForm />} />
        <Route path="/education" element={<EducationForm />} />
        <Route path="/certificate" element={<CertificateForm />} />
        <Route path="/skills" element={<SkillForm />} />
        <Route path="/summary" element={<SummaryObjective />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App;
