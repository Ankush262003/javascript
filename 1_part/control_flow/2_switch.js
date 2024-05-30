// Syntax Of Switch

// switch (key) {
//       case value:
            
//             break;

//       default:
//             break;
// }


const month = 1
switch (month) {
      case 1:
            console.log("january")
            break;
      case 2:
            break;
      case 3:
            console.log("mar");
            break;                 // "break" control flow of code after match case
      case 4:
            console.log("feb");

      default:
            console.log("default case executed");
            break;
}



// Note:
// 1- Mendetry to define default statement after end of case
// 2- Mendetry to define break statement in each case