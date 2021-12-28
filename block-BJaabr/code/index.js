// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/
   
// - Write a Function Declaration
function addOne(n){
     return n+1;
}
// - Write a Function Expression
const addOne = function (n){
                     return n+1;
                     }
// - Write an Arrow Function without curly brackets(if possible)
   const addOne =(n) => n+1;
// - Write an Arrow Function with curly brackets
   const addOne= (n) =>{
            return n+1;
   }
// - Execute the function
  addOne(5);
// - Execute the function and store the return value in a variable.
  let returnValue =  addOne(5);
// - What is the typeof returnValue
  typeof(returnValue); // number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne (p){
        return p-1;
}
// - Write a Function Expression
let substractOne = function (p){
          return p-1;
}
// - Write an Arrow Function without curly brackets(if possible)
 let substractOne =(p) =>p-1;
// - Write an Arrow Function with curly brackets
 let substractOne =(p) =>{
       return p-1;  
 }
// - Execute the function
  substractOne(8);
// - Execute the function and store the return value in a variable.
   let returnValue =substractOne(8);
// - What is the typeof returnValue
    typeof(returnValue); // number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
   function sum(num1 ,num2 ){
            return num1 + num2;
   }
// - Write a Function Expression
let sum =function (num1 , num2){
         return num1+num2;
}
// - Write an Arrow Function without curly brackets(if possible)
let sum = (num1 ,num2)=> num1 + num2;
// - Write an Arrow Function with curly brackets
let sum = (num1 , num2)=> {
     return num1 +num2 ;
}
// - Execute the function
   sum(6 ,7);
// - Execute the function and store the return value in a variable
  let sumvalue= sum(6,7); 
// - What is the typeof returnValue
  typeof(sumvalue); // number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
   function square (n){
        return n*n;
   }
// - Write a Function Expression
let square =function (n) {
     return n*n;
}
// - Write an Arrow Function without curly brackets(if possible)
   let square =(n)=> n*n;
  
// - Write an Arrow Function with curly brackets
  let square =(n) =>{
    return n*n;
  }
// - Execute the function
  square(6);
// - Execute the function and store the return value in a variable
  let squarevalue =square(6);
// - What is the typeof returnValue
 typeof(squarevalue); // number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
   function isGreater(x ,y){
        return x>y;

   }

  


// - Write a Function Expression
 let isGreater = function(x,y){
   return x>y;
 }
// - Write an Arrow Function without curly brackets(if possible)
  let isGreater=(x,y)=> x>y;
// - Write an Arrow Function with curly brackets
    let isGreater =(x,y)=>{
      return x> y;
    }
// - Execute the function
 isGreater(7 ,8);
// - Execute the function and store the return value in a variable
 let greatervalue = isGreater(7 ,8);
// - What is the typeof returnValue
  typeof(isGreater(7,8)); // boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
 function oddOrEven (n){
      if(n%2===0){
        return(`${n} is even`);
      }else {
        return(`${n} is odd`);
      }
 }
// - Write an anonymous Function Expression
      const oddOrEven =function(n){
        if(n%2===0){
          return(`${n} is even`);
        }else {
          return(`${n} is odd`);
        }

      }
// - Write an named Function Expression
const oddOrEven =function oddandeven (n){
  if(n%2===0){
    return(`${n} is even`);
  }else {
    return(`${n} is odd`);
  }

}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
   const oddorEven = (n)=> n%2===0? `${n} is even`:`${n} is odd `
// - Write an Arrow Function with curly brackets
  const oddOrEven =(n)=>{
    if(n%2===0){
      return(`${n} is even`);
    }else {
      return(`${n} is odd`);
    }
  }
// - Execute the function
     oddOrEven(6);
// - Execute the function and store the return value in a variable
let returnValue= oddOrEven(6);
// - What is the typeof returnValue
typeof(returnValue);// mnumber
