function isEligibleToVote(age){
	return age>=18 ? console.log("Eligible to vote") : console.log("Not eligible to Vote");
 }

//ES6 Code using Arrow Function
//const isEligibleToVote=(age)=>age>=18?console.log("Eligible to vote") : console.log("Not eligible to Vote");

console.log(isEligibleToVote(20)) // Eligible to vote
console.log(isEligibleToVote(18)) // Eligible to vote
console.log(isEligibleToVote(17)) // Not eligible to vote