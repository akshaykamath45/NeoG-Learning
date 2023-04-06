import { student } from "./App";

export function StudentInformationCard() {
  const { name, english, maths, computers } = student;
  let currentGrade = " ";
  const totalMarks = english + maths + computers;
  if (totalMarks > 225) {
    currentGrade = "A";
  } else if (totalMarks >= 180 && totalMarks < 225) {
    currentGrade = "B";
  } else if (totalMarks >= 150 && totalMarks < 180) {
    currentGrade = "C";
  } else {
    currentGrade = "D";
  }

  return (
    <div>
      <h1>
        {name} <br /> {english} <br /> {maths} <br /> {computers}
      </h1>
      <h1>Total Marks : {totalMarks}</h1>
      <h1>Grade : {currentGrade}</h1>
    </div>
  );
}
