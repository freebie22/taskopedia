import React from "react";
import Student from "./Components/Student/Students";
import StudentReview from "./Components/Student/StudentReview";

class MainBody extends React.Component {
  render()
  {
    const whatWeWillLearn = "React JS";
    const totalLecture = "Total Lecture";
    const numberOfLecture = 3;
    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course we will be learning {whatWeWillLearn} by building
          Taskopedia
        </p>
        <p>
          {totalLecture} - {numberOfLecture}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and class components</li>
        </ul>
        <div className="row container">Students Enrolled</div>
        <Student
          name="Kirk Hammett"
          experience={1}
          headImage="https://api.lorem.space/image/face?w=150&h=150"
        >
          <StudentReview></StudentReview>
        </Student>
        <Student
          name="Artem Boikov"
          experience={2}
          headImage="https://api.lorem.space/image/face?w=150&h=150"
        >
          <StudentReview></StudentReview>
        </Student>
        <Student
          name="James Hetfield"
          experience={5}
          headImage="https://api.lorem.space/image/face?w=150&h=150"
        ></Student>
        <Student
          name="Jason Newsted"
          experience={8}
          headImage="https://api.lorem.space/image/face?w=150&h=150"
        ></Student>
        {/* <div>
            Enter Task : <input maxLength={8} placeholder="Test" readOnly={false}></input>
          </div> */}
      </div>
    );
  }
}
export default MainBody;
