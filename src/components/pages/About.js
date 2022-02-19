import React from "react";

export default function About() {
  return (
    <main>
      <div class="container mt-0">
        <div class="row d-flex justify-content-center">
          <div class="col-md-7 text-center">
            <img
              className="profile-pic"
              src={process.env.PUBLIC_URL + "/assets/108-melod.png"}
              alt="profile-pic"
            />
             {/* <h6 class="card-subtitle mb-2 text-muted fst-italic">About Me:</h6> */}
            <h1 class="display-4 fst-italic text-dark text-center">
              UI/UX FullStack Developer
            </h1>
            <hr class="text-dark" />
            <p class="lead text-white text-center">
              Hi, I'm Warren, a UI/UX designer and FullStack Developer based out of SEPA. I enjoy
              creating tools and layouts that help users get things done.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
