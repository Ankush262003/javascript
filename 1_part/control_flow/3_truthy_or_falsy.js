const userEmail = "shivank634@gmail.com"

if (userEmail) {           //-> consider true 
      // console.log("Got user email");
} else {
      console.log(" Don't have user email");
}



// Falsy Value:
//      -> false
//      -> 0
//      -> -0
//      -> BigInt
//      -> ""
//      -> null
//      -> undefined
//      -> NaN


//  Truthy Value:
//      -> "0"
//      -> "flase"
//      -> " "
//      -> []
//      -> {}
//      -> function(){}   this is emty function


// Nullish Coalescing Operator (??):

// The nullish coalescing(??) operator is a logical operator that returns its right - hand side operand   when its left - hand side operand is null or undefined, and otherwise returns its left - hand side operand.

let val1;
val1 = 5 ?? 10
console.log(val1)

val1 = null ?? 10
console.log(val1)

val1 = undefined ?? 10
console.log(val1)

val1 = null ?? 10 ?? 20
console.log(val1)


// Terniary Operator:  syntex => (condition ? true : false)
const q = 100
q <= 50 ? console.log("less than 50") : console.log("more than 50")  