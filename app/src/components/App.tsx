import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyProfilePage from "./CompanyProfilePage";
import ReviewsPage from "./ReviewsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/company-profile/:companyId"
          element={<CompanyProfilePage />}
        />
        <Route path="/company-reviews/:companyId" element={<ReviewsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
