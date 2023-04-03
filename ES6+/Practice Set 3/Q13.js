const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
  }
  
  const getAddress=(obj)=>{
    postalCode=obj.postalCode;
    city=obj.city;
    const requiredObj={postalCode,city};
    return requiredObj;
    
  }
  console.log(getAddress(userData))
  // {postalCode: '12134', city: 'Germany'}