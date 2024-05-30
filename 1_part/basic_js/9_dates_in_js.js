let myDate = new Date()

console.log(`In string ->  ${myDate.toString()} `)
console.log(`Ony data in string -> ${myDate.toDateString()}`)
console.log(`to time in string -> ${myDate.toTimeString()}`)
console.log(`in JSON -> ${myDate.toJSON()}`)
console.log(`Only locale date in string -> ${myDate.toLocaleDateString()}`)
console.log(`Only locale time in string-> ${myDate.toLocaleTimeString()}`)
console.log(`Type of date ->  ${typeof(myDate)} `) // Type of date


// ************* Access Month, Years & Date directoly *************
let currDate = new Date()

console.log("Only current date ->", currDate.getDate())
console.log("Only current month ->", currDate.getMonth()) // Month start from 0 - 11 in JS
console.log("Only current year ->", currDate.getFullYear())



// ********* Create date according to your need *********
let createdDate = new Date(2023, 5, 14) // in js month start from 0 to 11 
console.log("Created date->", createdDate.toDateString())


let createdDate1 = new Date("2023-01-14") // YY-MM-DD from 
console.log(createdDate1.toLocaleDateString())

let createdDate2 = new Date("01-14-2023") // DD-MM-YY
console.log(createdDate2.toLocaleString())



//Milisecond -> second -> minute -> days -> weeks -> months -> years
let timeStamp = Date.now()
console.log(`timeStamp -> ${timeStamp}`)

let second = Math.round(timeStamp/1000)  //for milisecond to second divided by 1000
console.log(`second -> ${second}`)

let minute = Math.round(second/60)  // converting in minute by dividing 60 seconds
console.log(`minute -> ${minute}`)

let hours = Math.round(minute/60)  // converting in hours by dividing 60 minutes
console.log(`hours -> ${hours}`)

let day = Math.round(hours / 24)  // converting in day by dividing 24 hours
console.log(`days -> ${day}`)

let weeks = Math.round(day / 7);   // converting in week by dividing 7 days
console.log(`week -> ${weeks}`)

// let month = Math.round(weeks/)
