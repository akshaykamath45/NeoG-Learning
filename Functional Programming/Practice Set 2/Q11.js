const students = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "A", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "B", scholarship: true },
  ];
  
  const findStudent=(students)=>students.find(({grade,scholarship})=>grade=="B" && scholarship)
  
  const student = findStudent(students);
  console.log(student); 
  // Output: { name: "Sarah", grade: "B", scholarship: true }