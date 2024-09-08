import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import { useParams } from "react-router-dom";
import { companyData } from "data/companyData";

const CompanyProfilePage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();

  const company = companyData[companyId || ""];

  if (!company) {
    return <div>Company not found.</div>;
  }

  return (
    <div className="container">
      <Navbar />
      <div className="card">
        <img
          src={`./img/logo/logo-${companyId}.png`}
          width="300"
          alt="Placeholder"
        />
        <h1>{company.name}</h1>
        <p>{company.description}</p>
        <h6>★★★★★ (112)</h6>
        <a href={`/#/company-reviews/${companyId}`} rel="noopener noreferrer">
          View All Reviews
        </a>
      </div>
    </div>
  );
};

export default CompanyProfilePage;
