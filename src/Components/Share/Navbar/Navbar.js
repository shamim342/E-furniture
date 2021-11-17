import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
  // window.addEventListener("scroll",function(){
  //    let header=document.querySelector("nav")
  //     header.classList.toggle("sticky",window.scrollY > 0)
  // })

  const { user, setLoggedIn, logout } = useAuth();
  return (
    <nav class="navbar navbar-expand-lg navbar-light sticky">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <span className="mr-4">
            <FontAwesomeIcon icon={faChair} />
          </span>
          <span className="customize">Online-Furniture</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navbar-customize navItem">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/allProduct">Explore</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              {user.email ? (
                <button className="btn-danger" onClick={logout}>
                  logout
                </button>
              ) : (
                <Link to="/login" className="position">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
