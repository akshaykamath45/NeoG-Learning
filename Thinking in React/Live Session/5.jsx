const employees = [
    { id: "E1", name: "Arpit Jain", workExperience: 6 },
    { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
    { id: "E3", name: "Priya Shetty", workExperience: 9 },
    { id: "E4", name: "Aman Sen", workExperience: 1 }
  ];
  
  
  
  function changeBorder(workExperience){
    if(workExperience>5){
      return "2 px solid yellow"
    }
    return " 1px solid white"
  }
  export default function App() {
    return (
      <div className="App">
        <div className="app-body">
        {employees.map(({ name, workExperience }) => 
          <li style={{listStyle:"none",border:changeBorder(workExperience)}}>
             Work Experience {workExperience}
          </li>
        )}
        </div>
      </div>
    );
  }
  