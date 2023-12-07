// import {faker} from "@faker-js/faker"

import React from "react";

class Student extends React.Component
{
  render(){
    const years = this.props.experience > 1 ? "years" : "year";
    return(
      <div className="col-4 p-1">
          <div className="row border">
            <div className="col-2">
              <img className="w-100" src={this.props.headImage} alt=""/>
            </div>
            <div className="col-8">
              {this.props.name}<br/>
              Programming Experience - {this.props.experience} {years}
            </div>
            <div className="col-2">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
  
}

export default Student;