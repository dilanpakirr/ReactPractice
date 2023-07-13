import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function StudentDetail() {
  const { id } = useParams();
  return <div>Student detail id:{id}</div>;
}

export default StudentDetail;
