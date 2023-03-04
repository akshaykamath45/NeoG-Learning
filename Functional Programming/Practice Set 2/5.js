const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]

const getName=(name)=>name[0]==='A' ;

const getStudentName=(students)=>students.filter(getName);

const studentNames=getStudentName(studentName);

console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]