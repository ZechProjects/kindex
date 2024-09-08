import React from "react";
interface NavbarProps {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}
const Navbar: React.FC<NavbarProps> = ({
  isLoggedIn,
  handleLogout,
  handleLogin,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Kindex
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        {/* Right-aligned button */}
        {isLoggedIn ? (
          <>
            <button className="btn btn-primary ms-auto">Account</button> &nbsp;
            <button className="btn btn-danger ms-auto" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="btn btn-primary ms-auto" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
