const areStringsEqual = (str1,str2) => {
    if(str1.length===str2.length){
      for(let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++){
          if(str1[i]===str2[j]){
            return true;
          }else{
            return false;
          }
        }
      }
    }else{
      return false;
    }
  };
  
  console.log(areStringsEqual("Apple", "Apple")); // true
  console.log(areStringsEqual("Apple", "apple")); // false
  console.log(areStringsEqual("Papaya", "Watermelon")); // false
  