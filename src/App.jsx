// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Users from "./components/Users";
import Template from "./components/Template";
import Blog from "./components/Blog";
import Subscription from "./components/Subscription";
import Feedback from "./components/Feedback";

// Import ResumeMaker separately
import ResumeMaker from "./page/Resumemaker";

const AppContent = () => {
  const location = useLocation();

  // Hide Navbar on /resume-maker
  const hideNavbar = location.pathname.toLocaleLowerCase() === "/resume-maker";

  const users = Array(12).fill({
    id: "00001",
    name: "Rosie Pearson",
    contact: "+91 90991 34329",
    email: "Rose@gmail.com",
  });

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Admin pages with Navbar + Admin */}
        <Route path="/" element={<Admin />}>
          <Route index element={<Admin.DashboardContent />} />
          <Route path="users" element={<Users users={users} />} />
          <Route path="templates" element={<Template />} />
          <Route path="blog" element={<Blog />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>

        {/* Standalone page without Navbar/Admin */}
        <Route path="/resume-maker" element={<ResumeMaker />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
