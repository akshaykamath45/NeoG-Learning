const willThanosKillMe=(name,thanosKillsMe,thanosDoesNotKillMe)=>{
    if(name.length%2==0){
        thanosDoesNotKillMe();
    }
    else{
        thanosKillsMe();
    }
}

willThanosKillMe("akshay",()=>{console.log("Give me my bose speakers and apple headphones to my sister")},()=>{console.log("Yay! I am alive!")});
