import React from "react";
import { NavLink } from "react-router-dom";
const url =
  "https://media.istockphoto.com/id/1404931955/photo/gold-capital-letter-g.webp?b=1&s=170667a&w=0&k=20&c=m2rTRL_EYTa-I4__Pu_l8r4n2ObKNcjen5UNo_KJLkU=";

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img src={url} alt="logo" />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            fontWeight: isActive ? "500" : null,
                            borderBottom: isActive ? "1px solid #565387" : null,
                          };
                        }}
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            fontWeight: isActive ? "500" : null,
                            borderBottom: isActive ? "1px solid #565387" : null,
                          };
                        }}
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            borderBottom: isActive ? "1px solid #565387" : null,
                          };
                        }}
                        className="nav-link"
                        to="/service"
                      >
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            fontWeight: isActive ? "500" : null,
                            borderBottom: isActive ? "1px solid #565387" : null,
                          };
                        }}
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
