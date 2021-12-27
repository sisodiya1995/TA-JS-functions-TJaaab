/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
   function sayHello(name){
              
              alert(`Hello ${name}`)
   }
   sayHello("Akash");
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
   function getFullName(firstName , lastName) {
            let fullName = `${firstName} ${lastName} `;
            return fullName;

   }
    let msg1= getFullName("john" , "snow");
    alert(msg1);
    let msg2= getFullName("Nelson" ,"Mandela");
    alert(msg2);
            

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
 function addTwoNumbers(firstNum ,secondNum){
          let sum =firstNum +secondNum;
           if(firstNum !== Number(firstNum) && secondNum !==  Number(secondNum)){
             alert(`enter a valid number`);
           } else {
             return sum;
           }

           }
          
 
    let msg3= addTwoNumbers(30 ,45);
    alert(msg3);
   let msg4= addTwoNumbers("akash" , "singh");
   alert(msg4);

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
 
 function calc (numA , numB, operation){
    
      
      
}
 

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(year){
        if(year % 4===0 && year %100===0 ){
          alert(`${year} true`)
        } else{
          alert(`${year} false`)
        }
}
  isLeapYear(2000);
/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
 function getFactorial(number){
   let fact=1;
   for(let i =1 ;i<=number; i++){
    fact =fact*i;
   }
     return(`factorial number is ${fact}`);
 }
 getFactorial(7);
