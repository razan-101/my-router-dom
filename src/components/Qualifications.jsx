import React from "react";
import "./Qualifications.css";

const qData = [
  { course: "B.Tech in Computer Science", board: "Silicon University", year: "2023", marks: "8.7 CGPA", division: "First" },
  { course: "12th Standard", board: "CBSE Board", year: "2020", marks: "93.4%", division: "First" },
  { course: "10th Standard", board: "CBSE Board", year: "2018", marks: "93.4%", division: "First" }
];

const aData = [
  "Secured 1st position in National Coding Contest 2022",
  "Published a research paper on Machine Learning in ABC Journal",
  "Winner of Hackathon 2023 organized by XYZ Company",
  "Received Best Project Award in Final Year Engineering",
  "Achieved Gold Medal in State-level Mathematics Olympiad"
];

const projectsData = [
  { title: "Online Shopping System", description: "Developed a full-stack e-commerce web application using React, Node.js, and MongoDB. It allows users to browse, search, and purchase products with an integrated payment gateway." },
  { title: "Weather Forecasting App", description: "Built a weather forecasting app using Python and OpenWeatherMap API. It provides real-time weather updates with a user-friendly interface, displaying temperature, humidity, and weather conditions." }
];

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

          {qData.map((qual, index) => (
            <React.Fragment key={index}>
              <div className="table-cell">{qual.course}</div>
              <div className="table-cell">{qual.board}</div>
              <div className="table-cell">{qual.year}</div>
              <div className="table-cell">{qual.marks}</div>
              <div className="table-cell">{qual.division}</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <h2>Achievements</h2>
      <div className="achievements-container">
        <ul>
          {aData.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <h3>Projects</h3>
      <div className="projects-container">
        <dl>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <dt>{project.title}</dt>
              <dd>{project.description}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Qualifications;