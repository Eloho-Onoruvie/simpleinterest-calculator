// console.log("from javascript file"); 
// const candidateScore = document.getElementById("score");
// const trigger = document.getElementById("check");
// trigger.addEventListener("click", ()=> console.log("my button", candidateScore.value));

// console.log("this is score", candidateScore)

const principal = document.getElementById("principal");
const Rate = document.getElementById("Rate");
const Time = document.getElementById("Time");
const calculate = document.getElementById("button");



// let principal = 1000;
// let rate = 0.05;
// let time = 2;




calculate.addEventListener("click", () => {
  let p = Number(principal.value)
  let R = Number(Rate.value/100)
  let T = Number(Time.value)

let interest = p*R*T;
console.log("Interest is ", interest);
const totalAmount = p + interest;
console.log("Amount is ", totalAmount)
console.log("After", Time, "at an interest rate of", interest, "the total amount will be", totalAmount);
document.write("result is ", totalAmount)
});

// console.log("answer", totalAmount)