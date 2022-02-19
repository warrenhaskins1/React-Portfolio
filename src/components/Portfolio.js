import React from "react";
import Projects from "./Projects";

const projects = [
  {
    id: 0,
    title: "Workday Scheduler",
    img: "./assets/schedulerScreenshot.png",
    desc: "This is an app which allows the user to make a note during a chosen timeslot. Depending on the hour of the day, the user can check their schedule using a color code at-a-glance.",
    repo: "https://github.com/warrenhaskins1/day-planner-05",
    deployed: "https://warrenhaskins1.github.io/day-planner-05/",
  },

  {
    id: 1,
    title: "Employee Tracker",
    img: "./assets/12EMPLOYEEScreenshot.png",
    desc: "Using node.js and MySql, users can view/update and post data to a database which tracks departments, roles and employees which is deployed and viewed using the terminal. Given the provided prompts using Inquirer, the user can select various actions to manage a companies employees and their various roles/salaries and departments as well as managers.",
    repo: "https://github.com/warrenhaskins1/12-sql-employee-tracker",
    deployed:
      "https://drive.google.com/file/d/1cc9hNweRxOZvHj2CiyfNeKsnWFBJ7_Mv/view",
  },

  {
    id: 2,
    title: "Code-Quiz",
    img: "./assets/screenshotCQ.png",
    desc: "Test your knowledge of html/css/js!",
    repo: "https://github.com/warrenhaskins1/JS-Code-Quiz-Challenge",
    deployed: "https://warrenhaskins1.github.io/JS-Code-Quiz-Challenge",
  },

  {
    id: 3,
    title: "Just Another Text Editor",
    img: "jate.png",
    desc: "J.A.T.E. (Just Another Text Editor) is a simple text-editing app that the user can install to their browser or desktop and use online/offline.",
    repo: "https://github.com/warrenhaskins1/PWA-Text-Editor",
    deployed: "https://jate-pwa-19.herokuapp.com/",
  },

  {
    id: 4,
    title: "g-Wish",
    img: "./assets/gWishDeployed.png",
    desc: "This application gives users the opportunity to create a list of video games pulling data from the RawG api.",
    repo: "https://github.com/warrenhaskins1/g-Wish/deployments/activity_log?environment=g-wish",
    deployed: "https://github.com/warrenhaskins1/g-Wish",
  },

  {
    id: 5,
    title: "Image-Creator",
    img: "./assests/IC.png",
    desc: "Create and customize images for social media posts with giphy & unsplash api's",
    repo: "https://github.com/warrenhaskins1/image-creator",
    deployed: "https://warrenhaskins1.github.io/image-creator/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="portfolio-custom">Portfolio</p>
      <hr/>
      <Projects projects={projects}/>
      </div>
  );
}


export default Portfolio;