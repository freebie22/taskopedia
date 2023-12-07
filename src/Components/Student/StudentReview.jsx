import React from "react";
class StudentReview extends React.Component {
  render() {
    return (
      <div className="p-2">
        <i
          style={{ cursor: "pointer" }}
          class="bi bi-hand-thumbs-up-fill text-success p-1"
        ></i>
        <i
          style={{ cursor: "pointer" }}
          class="bi bi-hand-thumbs-down-fill text-danger p-1"
        ></i>
      </div>
    );
  }
}

export default StudentReview;
