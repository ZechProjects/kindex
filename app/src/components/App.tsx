import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component

const App: React.FC = () => {
  return (
    <div className="container">
      <Navbar /> {/* Use the Navbar component here */}
      <h1 className="text-center mt-5">Kindex Directory</h1>
      <p className="text-center">
        Decentralised listing of KYB compliant companies for your vendor needs.
      </p>
      <button className="btn btn-secondary d-block mx-auto">
        Search Directory
      </button>
      <br></br>
      <button className="btn btn-secondary d-block mx-auto">
        Register Company
      </button>
      <hr></hr>
      <h2 className="text-center">Featured Companies</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title">Company 1</h5>
              <p className="card-text">Description of Company 1</p>
              <a href="#" className="btn btn-primary">
                View Company
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title">Company 2</h5>
              <p className="card-text">Description of Company 2</p>
              <a href="#" className="btn btn-primary">
                View Company
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title">Company 3</h5>
              <p className="card-text">Description of Company 3</p>
              <a href="#" className="btn btn-primary">
                View Company
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
