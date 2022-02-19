import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills nav-fill my-3">
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            class="nav-link px-2 text-secondary"
          >
            Resume 
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
            class="nav-link px-2 text-secondary"
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
            class="nav-link px-2 text-secondary"
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            class="nav-link px-2 text-secondary"
          >
            Contact  <i
                class="far fa-envelope"></i>
          </a>
        </li>
      </ul>
      
    </header>
  );
}

// );

export default Header;
