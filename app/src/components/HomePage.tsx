import React from "react";
import Flag from "react-flagkit";
import { Link } from "react-router-dom";
import { companyData } from "data/companyData";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Kindex Directory</h1>
      <p className="text-center">
        Decentralised listing of KYB compliant* companies for your vendor needs.
        <br></br>
        <i>
          * All companies listed are verified and compliant with KYB regulations
          through the Kinto KYB process.
        </i>
      </p>
      <button className="btn btn-secondary d-block mx-auto">
        Search Directory
      </button>
      <hr></hr>
      <h2 className="text-center">Featured Companies</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="./img/logo/logo-1.png"
              className="card-img-top"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title">
                {companyData["1"].name}{" "}
                <Flag country={companyData["1"].country} />{" "}
              </h5>
              <h6>★★★★✰ (1442)</h6>
              <p className="card-text">{companyData["1"].description}</p>
              <Link to="/company-profile/1" className="btn btn-primary">
                View Company
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="./img/logo/logo-2.png"
              className="card-img-top"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title">
                {companyData["2"].name}{" "}
                <Flag country={companyData["2"].country} />{" "}
              </h5>
              <h6>★★★★✰ (55)</h6>
              <p className="card-text">{companyData["2"].description}</p>
              <Link to="/company-profile/2" className="btn btn-primary">
                View Company
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="./img/logo/logo-3.png"
              className="card-img-top"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title">
                {companyData["3"].name}{" "}
                <Flag country={companyData["3"].country} />{" "}
              </h5>
              <h6>★★★★★ (112)</h6>
              <p className="card-text">{companyData["3"].description}</p>
              <Link to="/company-profile/3" className="btn btn-primary">
                View Company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
