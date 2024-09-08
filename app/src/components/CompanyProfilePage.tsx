import React from "react";
import { Link, useParams } from "react-router-dom";
import { companyData } from "data/companyData";

const CompanyProfilePage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();

  const company = companyData[companyId || ""];

  if (!company) {
    return <div>Company not found.</div>;
  }

  return (
    <div className="container">
      <div className="card p-3">
        <img
          src={`./img/logo/logo-${companyId}.png`}
          width="300"
          alt="Placeholder"
        />
        <h1>{company.name}</h1>
        <p>{company.description}</p>
        <Link
          to={`https://kintoscan.io/address/${company.kinto_address}`}
          className="btn btn-primary d-inline-block btn_tight"
          target="_kinto_scan"
          rel="noopener noreferrer"
        >
          View on Kinto Scan
        </Link>
        <Link
          to={`https://explorer.kinto.xyz/address/${company.kinto_address}?tab=user_ops`}
          className="btn btn-primary d-inline-block btn_tight"
          target="_kinto_explorer"
          rel="noopener noreferrer"
        >
          View on Kinto Explorer
        </Link>
        <p>
          <b>Fairtrade Certifications:</b> {company.fairtrade_status}{" "}
          <Link
            to={`https://www.fairtrade.net/about/certification`}
            target="_learn"
            rel="noopener noreferrer"
          >
            Learn more
          </Link>
        </p>
        <p>
          <b>Greenmark Certifications:</b> {company.greenmark_status} (GBB
          Points: {company.greenmark_points}){" "}
          <Link
            to={`https://www.greenbusinessbenchmark.com/product#certification`}
            target="_learn"
            rel="noopener noreferrer"
          >
            Learn more
          </Link>
        </p>
        <h6>★★★★★ (112)</h6>
        <a href={`/#/company-reviews/${companyId}`} rel="noopener noreferrer">
          View All Reviews
        </a>
        <hr></hr>
        <a href={`/#/transactions/${companyId}`} rel="noopener noreferrer">
          View All Payments Transactions on Kinto
        </a>
      </div>
    </div>
  );
};

export default CompanyProfilePage;
