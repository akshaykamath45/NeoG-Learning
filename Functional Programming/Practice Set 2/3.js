const employeeData = [
	{name: "ram", dept: "marketer"}, 
	{name: "Radha", dept: "SDE"},
	{name: "shyam", dept: "finance professional"},
]

const getNameAndDept=({name,dept})=>console.log(`Hi ${name} we are glad to have you as a ${dept} `);

const getEmployeeData=(arr)=>arr.map(getNameAndDept);

const greetEmployeeMessages=getEmployeeData(employeeData);

console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']