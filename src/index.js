import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./JSX/Header"
import Students from "./JSX/Students"

function MainBody() {
  const whatWeWillLearn = "React JS";
  const totalLecture = "Total Lecture";
  const numberOfLecture = 3;

  return (
    <div>
      <p>
        In this course we will be learning {whatWeWillLearn} by building Taskopedia
      </p>
      <p>{totalLecture} - {numberOfLecture}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and class components</li>
      </ul>
      {/* <div>
        Enter Task : <input maxLength={8} placeholder="Test" readOnly={false}></input>
      </div> */}
    </div>
  );
}


function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header></Header>
    <MainBody></MainBody>
    <Students></Students>
    <Footer></Footer>
  </div>
);
