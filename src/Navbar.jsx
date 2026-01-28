import "./Navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const blogActive = location.pathname.startsWith("/blog");
  console.log(blogActive);

  return (
    <nav className="navbar navbar-expand-md fixed-top custom-navbar p-0">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
          <i
            className="fa-solid fa-camera text-white fs-4"
            style={{ color: "#e9e9e9" }}
          ></i>

          <div className="d-flex flex-column">
            <span className="logo-title text-white">عدسة</span>
            <span className="logo-sub d-none d-sm-block">
              عالم التصوير الفوتوغرافي
            </span>
          </div>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler text-light border-0 box-shadow-none"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-list fs-2"></i>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto nav-pill-background rounded-pill p-1 d-none d-md-flex">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link text-secondary ${isActive ? "active" : ""}`
                }
              >
                الرئيسية
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/blog"
                className={() =>
                  `nav-link text-secondary ${blogActive ? "active" : ""}`
                }
              >
                المدونة
              </NavLink>
            </li>
          </ul>
          <div className="d-none d-md-flex align-items-center gap-3">
            <button className="search-btn p-2 rounded-3">
              <i className="fa-solid fa-search"></i>
            </button>
            <Link
              to="/blog"
              className="btn read-btn text-white border-0 px-3 py-2 rounded-3"
            >
              ابدأ القراءة
            </Link>
          </div>
          <div className="d-md-none mt-3">
            <div className="mobile-menu d-flex flex-column gap-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `mobile-link px-3 py-2 rounded-3 ${isActive ? "active-mobile" : ""}`
                }
              >
                الرئيسية
              </NavLink>

              <NavLink
                to="/blog"
                className={() =>
                  `mobile-link px-3 py-2 rounded-3 ${blogActive ? "active-mobile" : ""}`
                }
              >
                المدونة
              </NavLink>

              <Link
                to="/blog"
                className="btn read-btn text-white border-0 px-3 py-2 rounded-3 mt-2"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
