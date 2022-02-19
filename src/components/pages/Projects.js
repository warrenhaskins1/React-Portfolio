import React from "react";

export default function Projects(props) {
  return (
<div>
  
      <div class="card mx-5 mb-4 bg-dark bg-gradient border-2">
  <img class=""
              className=""
              src={process.env.PUBLIC_URL + "/assets/schedulerScreenshot.png"}
              alt="profile-pic"
            />
  <div class="card-body">
    <h5 class="card-title display-6 fst-italic text-white text-center">Workday Scheduler</h5><hr class="text-white"/>
    <p class="card-text lead text-white text-center">This is an app which allows the user to make a note during a chosen timeslot. Depending on the hour of the day, the user can check their schedule using a color code at-a-glance.</p>
  </div>
  <a class="btn btn-primary m-3" href="https://github.com/warrenhaskins1/day-planner-05" role="button">Repo</a>
  <a class="btn btn-primary m-3" href="https://warrenhaskins1.github.io/day-planner-05/" role="button">Deployed</a>
</div>

<div class="card mx-5 mb-4 bg-dark bg-gradient border-2">
  <img class=""
              className=""
              src={process.env.PUBLIC_URL + "/assets/12EMPLOYEEScreenshot.png"}
              alt="profile-pic"
            />
  <div class="card-body">
    <h5 class="card-title display-6 fst-italic text-white text-center">Employee Tracker</h5><hr class="text-white"/>
    <p class="card-text lead text-white text-center">Using node.js and MySql, users can view/update and post data to a database which tracks departments, roles and employees which is deployed and viewed using the terminal. Given the provided prompts using Inquirer, the user can select various actions to manage a companies employees and their various roles/salaries and departments as well as managers.</p>
  </div>
  <a class="btn btn-primary m-3" href="https://github.com/warrenhaskins1/12-sql-employee-tracker" role="button">Repo</a>
  <a class="btn btn-primary m-3" href="https://drive.google.com/file/d/1cc9hNweRxOZvHj2CiyfNeKsnWFBJ7_Mv/view" role="button">Deployed</a>
</div>

<div class="card mx-5 mb-4 bg-dark bg-gradient border-2">
  <img class=""
              className=""
              src={process.env.PUBLIC_URL + "/assets/screenshotCQ.png"}
              alt="profile-pic"
            />
  <div class="card-body">
    <h5 class="card-title display-6 fst-italic text-white text-center">Code-Quiz</h5><hr class="text-white"/>
    <p class="card-text lead text-white text-center">Test your knowledge of html/css/js!</p>
  </div>
  <a class="btn btn-primary m-3" href="https://github.com/warrenhaskins1/JS-Code-Quiz-Challenge" role="button">Repo</a>
  <a class="btn btn-primary m-3" href="https://warrenhaskins1.github.io/JS-Code-Quiz-Challenge" role="button">Deployed</a>
</div>

<div class="card mx-5 mb-4 bg-dark bg-gradient border-2">
  <img class=""
              className=""
              src={process.env.PUBLIC_URL + "/assets/jate.png"}
              alt="profile-pic"
            />
  <div class="card-body">
    <h5 class="card-title display-6 fst-italic text-white text-center">Just Another Text Editor</h5><hr class="text-white"/>
    <p class="card-text lead text-white text-center">J.A.T.E. (Just Another Text Editor) is a simple text-editing app that the user can install to their browser or desktop and use online/offline.</p>
  </div>
  <a class="btn btn-primary m-3" href="https://github.com/warrenhaskins1/PWA-Text-Editor" role="button">Repo</a>
  <a class="btn btn-primary m-3" href="https://jate-pwa-19.herokuapp.com/" role="button">Deployed</a>
</div>

<div class="card mx-5 mb-4 bg-dark bg-gradient border-2">
  <img class=""
              className=""
              src={process.env.PUBLIC_URL + "/assets/gWishDeployed.png"}
              alt="profile-pic"
            />
  <div class="card-body">
    <h5 class="card-title display-6 fst-italic text-white text-center">g-Wish</h5><hr class="text-white"/>
    <p class="card-text lead text-white text-center">This application gives users the opportunity to create a list of video games pulling data from the RawG api.</p>
  </div>
  <a class="btn btn-primary m-3" href="https://github.com/warrenhaskins1/g-Wish/deployments/activity_log?environment=g-wish" role="button">Repo</a>
  <a class="btn btn-primary m-3" href="https://github.com/warrenhaskins1/g-Wish" role="button">Deployed</a>
</div>

<div class="card mx-5 mb-4 bg-dark bg-gradient border-2">
  <img class=""
              className=""
              src={process.env.PUBLIC_URL + "/assets/IC.png"}
              alt="profile-pic"
            />
  <div class="card-body">
    <h5 class="card-title display-6 fst-italic text-white text-center">Image-Creator</h5><hr class="text-white"/>
    <p class="card-text lead text-white text-center">Create and customized images for social media posts using the Giphy & Unsplash API's</p>
  </div>
  <a class="btn btn-primary m-3" href="https://github.com/warrenhaskins1/image-creator" role="button">Repo</a>
  <a class="btn btn-primary m-3" href="https://warrenhaskins1.github.io/image-creator/" role="button">Deployed</a>
</div>

</div>
  );
}
