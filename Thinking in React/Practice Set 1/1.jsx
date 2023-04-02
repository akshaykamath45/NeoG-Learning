function EmployeeCard({name,designation,workExperience}){
    return(
      <div>
        <h1>
          <p>Name : {name}</p>
          <p><span style={{color:"green"}}>Designation</span> : {designation}</p>
          <p><span style={{color:"blue"}}>Work Experience</span> : {workExperience} Months </p> 
        </h1>
      </div>
    )
  }
  
  export default function App() {
    return (
      <div className="App">
          <EmployeeCard name="Akshay Kamath" designation="Front-End Developer" workExperience="3"/>
      </div>
    );
  }
  