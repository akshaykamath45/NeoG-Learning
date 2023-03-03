const isHelloPresent=(s)=>{
    var count=0;
    for(let i=0;i<s.length;i++){
      if(s[i]=='H' || s[i]=='h' && s[i+1]=='e' && s[i+2]=='l' && s[i+3]=='l' && s[i+4]=='o'){
        count++;
        break;
      }
    }
    if(count>=1){
      console.log("true");
    }
    else
      {
        console.log("false");
      }
  }
  
  console.log(isHelloPresent("Hello World")) // true
  console.log(isHelloPresent("World")) // false
  
//   const isHelloPresent = phrase => (phrase.includes("Hello") || phrase.includes("hello"))
  
//   console.log(isHelloPresent("Hello World")) // true
//   console.log(isHelloPresent("World")) // false
  
  
//   Solution 2:
//   const isHelloPresent = phrase => {
//       const phraseArray = phrase.split(" ");
//       for(word of phraseArray) return word.toLowerCase() === "hello"
//   }
  
  console.log(isHelloPresent("Hello World")) // true
  console.log(isHelloPresent("World")) // false