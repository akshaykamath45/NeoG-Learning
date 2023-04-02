const employees = [
    {
      name: 'Jack Smith',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 24000,
    },
    {
      name: 'Mary Robbins',
      level: 3,
      dept: 'Fin',
      designation: 'Manager',
      salary: 28000,
    },
    {
      name: 'Steve Williams',
      level: 4,
      dept: 'Ops',
      designation: 'President',
      salary: 35000,
    },
    {
      name: 'Bob Andrews',
      level: 1,
      dept: 'Fin',
      designation: 'Trainee',
      salary: 16500,
    },
    {
      name: 'Dave Martin',
      level: 2,
      dept: 'Fin',
      designation: 'Manager',
      salary: 21700,
    },
    {
      name: 'Julia Clarke',
      level: 3,
      dept: 'Ops',
      designation: 'Manager',
      salary: 26900,
    },
    {
      name: 'Kathy Jones',
      level: 4,
      dept: 'Tech',
      designation: 'President',
      salary: 42500,
    },
    {
      name: 'Tom Bresnan',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 22200,
    },
  ]
  
  function EmployeeDetails(){
    let totalSalary=0;
    for(let i=0;i<employees.length;i++){
      totalSalary+=employees[i].salary;
    } 
  
    return(
      <ul>
        {
          employees.map(({name,level,dept,designation,salary})=>
          <li>
            <p>Name : {name}</p>
            <p>Level: {level}</p>
            <p>Department : {dept}</p>
            <p>Designation : {designation}</p>
            <p>Salary : {salary}</p>
            <br/>
          </li>
          )  
        }
      <p>Total Salary Expense : {totalSalary}</p>
      </ul>
    )
  }
  
  export default function App() {
    return (
    <div className="App">
        <EmployeeDetails />
      </div>
    );
  }
  