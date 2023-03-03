//const isGreater=(a,b)=>a>b ? console.log(a,"is greater than",b) : console.log(b,"is greater than",a)
const isGreater=(a,b)=>{
	if(a>b){
			console.log(a,"is greater than",b);
	}
	else if(a==b){
			console.log(a,"is equal to ",b);
	} 
	else{
			console.log(b,"is greater than",a);
	}
}

console.log(isGreater(2, 5)) // 5 is greater than 2
console.log(isGreater(10, 5)) // 10 is greater than 5