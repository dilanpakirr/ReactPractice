import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentDetail from "./StudentDetail";
function Student() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/studentDetail/1">Student 1</Link>
          </li>
          <li>
            <Link to="/studentDetail/2">Student 2</Link>
          </li>
          <li>
            <Link to="/studentDetail/3">Student 3</Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}

export default Student;
