import React from 'react';

export default function Resume() {
  return (
    <div>
      <div class="card mx-5 mb-4 bg-dark bg-gradient border-2">
      <h5 class="card-title display-5 fst-italic text-white text-center mt-3">Resume</h5><hr class="text-white"/>
  <img class="card-img-top"
              className="resume-img"
              src={process.env.PUBLIC_URL + "/assets/resume.png"}
              alt="resume"
            />
  <div class="card-body">
    </div>
  <a class="btn btn-primary m-3" href="/assets/Resume_2.19.22.pdf" role="button" download>PDF <i class="fas fa-download"></i></a>
 
</div>
    </div>
  );
}
