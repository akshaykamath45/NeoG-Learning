const podAndTeamAllocation=(obj)=>{
    const teamId=667543;
    const requiredObj={...obj,teamId};
    return requiredObj;
  }
  
  const userData = { firstName: 'John', lastName: 'Dee' }
  console.log(podAndTeamAllocation(userData))
  // {firstName: 'John', lastName: 'Dee', teamId: 667543}