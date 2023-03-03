function checkForAlphabetA(string){
    for(let i=0;i<string.length;i++){
  var count=0;
                if(string[i]==='a' || string[i]==='A'){
                    count++;
        break;
                }	
        }
if(count>=1){
  console.log("Includes a");
}
else{
  console.log("Does not include a");
}
 
}

console.log(checkForAlphabetA("Tanay")) // Includes a 
console.log(checkForAlphabetA("Jeep")) // Does not include a 
console.log(checkForAlphabetA("Jane")) // Includes a