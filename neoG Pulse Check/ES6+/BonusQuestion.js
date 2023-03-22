const employee1 = { name: 'John', experience: 5, role: 'Tester', company:'Redbus' }
const employee2 = { name: 'Jane', experience: 2, role: 'Developer', company:'Chalo' }

const employeeInfo=({name,experience,role,company})=>`${name} has ${experience} years of experience as a ${role} in ${company}`


console.log(employeeInfo(employee1)) 

// Expected output: "John has 5 years of experience as a Tester in Redbus
// console.log(employeeInfo(employee2)) 