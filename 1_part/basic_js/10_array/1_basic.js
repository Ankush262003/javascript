const num = [0, 1, 2, 3, 4, 5, 6];  // Fist way to declare Array
const myArr = new Array(1, 2, 3, 4, 5)  // Second way to declare Array

// array with mixed data types(numbers, strings, objects).
const mixedArray = [
    "shivank",
    {
        name:"Rahul",
        age:20,
        class:"TY BSC (IT)"
    },
    1,2,3,4,5,6,7
];
console.log("mixedArray ->", mixedArray);

console.log("using negative index->", myArr[myArr.length -1])

// Nested array:
const marvel_hero = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_hero.push(dc_heros)
console.log("marvel_hero ->", marvel_hero)





// **************************** Method Of Array****************************//

// push() method:     ->  Add items at the end of array
const add = ["hello"]
add.push("Shivank", "Vivek", "1", "2")
console.log("add array ->", add)


// pop() method:      -> Removes the last element from an array
const remove = ["hello", "Shivank", "Singh", "how", "are", "you"]
remove.pop()
console.log("remove array ->", remove)


// unshift() method:  -> Inserts new elements at the start of an array
const unshift = [1, 2, 3, 4, 5, 6, 7]
unshift.unshift(0)
console.log("unshift array ->", unshift)


// shift() method:    -> Removes the first element from an array 
const shift = [1, 2, 3, 4, 5, 6, 7, 8, 9]
shift.shift()
console.log("shift array ->", shift)

// concat() method:   
// -> Additional arrays and/or items to add to the end of the array. 
// -> Combines two or more arrays. 
// -> This method returns a new array without modifying any existing arrays.

const concat = ["hello", "Shivank", "Singh", "how", "are", "you"]
let updatedConcat = concat.concat(unshift,shift) 
console.log("updatedConcat array ->", updatedConcat)


// sprade operator: 
const spred = [...shift, ...concat]
console.log("sprade array ->", spred)


// flat() method: 
//   -> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const nestedArray = [1, 2, 3, 4, 5, [7, 6, 5, 4], [5, 67, 43245, 34, 665, 57, [35, 65, 767, 86]]]
const modifiedNestedArray = nestedArray.flat(Infinity)
console.log("modifiedNestedArray array ->",modifiedNestedArray)


// Conversion from any data type to array: 
console.log("conversion from any data type to array ->", Array.from("Shivank singh"))
console.log(Array.from({ name: "shivank" })) // Intresting case

let num1 = 100;
let num2 = 200;
let num3 = 300;
console.log(Array.of("array of num1, num2, num3 ->",num1, num2, num3))




// ********** Question Methods of Array **********

const e = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(e.includes(6))  // include() method
console.log(e.indexOf(6)) // indexof() method


// join() methods 
//     -> Adds all the elements of an array into a string, separated by the specified separator string.
const f = ["hello", "Shivank", "Singh", "how", "are", "you"]
console.log(f.join())

// slice() method
const g = ["hello", "Shivank", "Singh", "how", "are", "you"]
let h = g.slice(1, 4)
console.log(h)

// splice() method
const k = ["hello", "Shivank", "Singh", "how", "are", "you"]
console.log(k)
let i = k.splice(1, 3)
console.log(i)