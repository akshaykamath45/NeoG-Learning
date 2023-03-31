// export const EmployeeCard = () => {
//     return (
//       <div>
//         <h1 className="app-header">Akshay Kamath</h1>
//         <div className="app-body">
//           <p>Designation: Computer Engineering Student</p>
//           <p>Year : 2nd Year</p>
//         </div>
//       </div>
//     );
//   };
  
const changeColorDesignation={color:"red"}
export const EmployeeCard = () => {
  return (
    <div>
      <h1 className="app-header">Akshay Kamath</h1>
      <div className="app-body">
        <p><span style={changeColorDesignation}>Designation:</span> Computer Engineering Student</p>
        <p><span style={{color:"blue"}}> Experience: </span> 3 months</p> 
        <p>Year : <span style={{fontSize:"18px"}}>2nd Year</span></p>
      </div>
    </div>
  );
};


// In EmployeeCard,
// 1.change the color of “Designation:” to red.
// 2.change the color of “Experience:” to blue.
// 3.make the font size of “10 years” to 18px
