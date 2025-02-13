import React from "react";
import "./Qualifications.css";

function Qualifications() {
  return (
    <div className="qualifications-container">
      <h1>Educational Qualifications</h1>

      <div className="table-container">
        <div className="qualifications-table">
          <div className="table-header">Course</div>
          <div className="table-header">Board</div>
          <div className="table-header">Year</div>
          <div className="table-header">Marks/CGPA</div>
          <div className="table-header">Division</div>

          <div className="table-cell">B.Tech in Computer Science</div>
          <div className="table-cell">Silicon University</div>
          <div className="table-cell">2023</div>
          <div className="table-cell">8.7 CGPA</div>
          <div className="table-cell">First</div>

          <div className="table-cell">12th Standard</div>
          <div className="table-cell">CBSE Board</div>
          <div className="table-cell">2020</div>
          <div className="table-cell">93.4%</div>
          <div className="table-cell">First</div>

          <div className="table-cell">10th Standard</div>
          <div className="table-cell">CBSE Board</div>
          <div className="table-cell">2018</div>
          <div className="table-cell">93.4%</div>
          <div className="table-cell">First</div>
        </div>
      </div>

      <h2>Achievements</h2>
      <div className="achievements-container">
        <ul>
          <li>Secured 1st position in National Coding Contest 2022</li>
          <li>Published a research paper on Machine Learning in ABC Journal</li>
          <li>Winner of Hackathon 2023 organized by XYZ Company</li>
          <li>Received Best Project Award in Final Year Engineering</li>
          <li>Achieved Gold Medal in State-level Mathematics Olympiad</li>
        </ul>
      </div>

      <h3>Projects</h3>
      <div className="projects-container">
        <dl>
          <dt>Project 1: Online Shopping System</dt>
          <dd>
            Developed a full-stack e-commerce web application using React, Node.js, and MongoDB. It allows users to browse, search, and purchase products with an integrated payment gateway.
          </dd>

          <dt>Project 2: Weather Forecasting App</dt>
          <dd>
            Built a weather forecasting app using Python and OpenWeatherMap API. It provides real-time weather updates with a user-friendly interface, displaying temperature, humidity, and weather conditions.
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Qualifications;
