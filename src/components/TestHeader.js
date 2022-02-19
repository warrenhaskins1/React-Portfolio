import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <header class="blog-header py-3 text-center">
    <div class="row align-items-center">
      <div class="col-sm-12 align-items-center">
        <h1 class="name fst-italic pt-4">Warren <span class="midInit">G</span><span class="dot">. </span>
        Haskins
          </h1>
      </div>
    </div>
    <nav class="nav d-flex justify-content-around">
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
            Contact
          </a>
        </li>
      </nav>
  </header>
  
      
  );
}

// );

export default Header;
