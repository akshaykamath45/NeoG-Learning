const student = {
    name: 'John Doe',
    english: 90,
    maths: 80,
    computers: 70,
  }
  
  function StudentCard({studentInformation}){
    const {name,english,maths,computers}=studentInformation;
    const total=english+maths+computers;
    let grade="D"
    if(total>=225){
      grade="A";
    }
    else if(total>=180 && total<225){
      grade="B";
    }
    else if(total>=150 && total<180){
      grade="C";
    }
    // else{
    //   grade="D";
    // }
    return(
      <div>
        <h1>Sudent Details</h1>
        <h3>Name:{name}</h3>
        <h3>English:{english}</h3>
        <h3>Maths:{maths}</h3>
        <h3>Computers:{computers}</h3>
        <h3>Total:{total}</h3>
        <h3>Grade :{grade}</h3>
      </div>
    )
  }
  
  export default function App() {
    return (
      <div className="App">
        <StudentCard studentInformation={student}/>
      </div>
    );
  }
  