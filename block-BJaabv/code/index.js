// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age) {
  // Your code goes here
  return (`puppy's age is ${age*7}`); 
}
calculateDogAge(2);
/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age,number) {
  // Your code goes here
        var restAge =75-age;
         console.log(`the number of movies for rest of the ${restAge} year and watch movies ${number*4*12*restAge} in your rest life.`)
         return(`number of movies you watch ${number*4*12*restAge}`);
}
 calculateMoviesToWatch(25 ,2);

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(c) {
  // Your code goes here
    return (`${c}°C is equal to ${(9/5)*c +32} °F`);
}
  celsiusToFahrenheit(25);
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function FahrenheitTOCelsius(f) {
  // Your code goes here
   return (`${f}°F is equal to ${(f-32)*5/9} °C`);
}
 FahrenheitTOCelsius(80);
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n ,x) {
  // Your code goes here
  if(n<0){
    console.log(`The number below 1 is not allowed`);
  }else{
   return n**x;
  }
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN() {
  // Your code goes here
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  // Your code goes here
    return (` the sum of ${n} natural number  ${n*(n+1)/2}`);
}
sumOfN(10);

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/
   
// Your code goes here
let sum =0;
   function sumof5and7(n){
     for(let i=1; i <= n; i++){
         if(i%5 == 0 || i%7==0){
           sum=sum +i;
           console.log(` value are ${i}`); 
           
         }      
         console.log(`sum is ${sum}`)
     }
     
   }
   sumof5and7(20);//
/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a,b) {
  // Your code goes here
  if(a<b){
    console.log(`${a} is minimum`);
  }else{
    console.log(`${b} is minimum`);
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(type) {
  // Your code goes here
  return (`type of value ${typeof(type)}`);
}
typeCheck(5);// 'type of value number'
typeCheck('akash');// 'type of value string'
typeCheck(true);// 'type of value boolean'
