//1. example of using == instead of ===

// let counter = "0"

// if (counter === 0) {
// counter++
// }
// console.log(counter)



//2. example of using eval()


// const x = 5;

// const y = 10;

// const expression = "console.log(`hello`)";



// const result = eval(expression); // result will be 50
// console.log(result);


//4.curly: Require Curly Braces Around Blocks
// if (user.isAdmin) {
//     doAdminTask();
// }

//3.no-else-return: Disallow else Blocks After return Statements
function isEven(num) {
    if (num % 2 === 0) {
      return true;
    } 
      return false;
  }