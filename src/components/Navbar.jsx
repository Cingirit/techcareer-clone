import { NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";

import React from "react";

function Deneme() {
  return (
    <>
      <nav className="fdiv navbar navbar-expand-lg shadow-sm bg-body-tertiary rounded">
        <div className="container-fluid container-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink to={"/"} className="navbar-brand me-auto">
            <img
              className="logo-img"
              src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg"
            />
          </NavLink>

          <div className="input-group search-bar ms-3 me-auto d-none d-lg-flex">
            <span
              className="input-group-text bg-white border-end-0"
              id="search-icon"
            >
              <IoMdSearch className="text-muted" />
            </span>
            <input
              className="form-control border-start-0"
              type="search"
              placeholder="Etkinlik, İş İlanı, Blog Ara"
              aria-label="Search"
            />
          </div>

          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Logo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                <NavLink
                  to={"/etkinlikler"}
                  className="nav-item nav-link mx-lg-2"
                >
                  Etkinlikler
                </NavLink>
                <NavLink to={"/jobs"} className="nav-item nav-link mx-lg-2">
                  İş İlanları
                </NavLink>
                <NavLink to={"/education"} className="nav-item nav-link mx-lg-2">
                  Eğitimler
                </NavLink>
                <NavLink to={"/tests"} className="nav-item nav-link mx-lg-2">
                  Testler
                </NavLink>
                <NavLink to={"/comunity"} className="nav-link mx-lg-2">
                  Komünite
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="d-lg-none custom-search">
            <IoMdSearch />
          </div>
          <button className="classic-button btn">Giriş / Üye Ol</button>
        </div>
      </nav>
    </>
  );
}

export default Deneme;
