import { NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl navbar-light container-fluid">
      {/* TOGGLE BUTTON */}
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

      {/* LOGO */}
      <NavLink to={"/"} className="navbar-brand ms-2">
        <img
          src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg"
          alt="TechCareer Logo"
          className="logo-img"
        />
      </NavLink>

      {/* SEARCH BAR*/}
      <div className="input-group search-bar me-lg-3 mb-3 mb-lg-0 ms-3 me-3 d-none d-lg-flex">
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


      {/* NAV LINKS */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="d-flex flex-column flex-lg-row align-items-lg-center w-100">
          {/* NAVLINKS */}
          <div className="d-flex flex-column flex-lg-row gap-3">
            <NavLink to={"/etkinlikler"} className="nav-link ms-3">
              Etkinlikler
            </NavLink>
            <NavLink to={"/jobs"} className="nav-link ms-3">
              İş İlanları
            </NavLink>
            <NavLink to={"/Trainings"} className="nav-link ms-3">
              Eğitimler
            </NavLink>
            <NavLink to={"/tests"} className="nav-link ms-3">
              Testler
            </NavLink>
            <NavLink to={"/cominity"} className="nav-link ms-3">
              Kominite
            </NavLink>
          </div>
        </div>
      </div>

      {/* LOGIN BUTTON AND SEARCH LOGO*/}
      <div className="d-lg-none custom-search" >
        <IoMdSearch/>
      </div>
      <button className="btn btn-primary border-xl-last">
        Giriş / Üye Ol
      </button>
    </nav>
  );
}

export default Navbar;
