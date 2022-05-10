//problem 1

// function factorial(n) {
//     if (n == 0)
//         return 1;
//     let i = n, fact = 1;
//     while (Math.floor(n / i) != n) {
//         fact = fact * i;
//         i--;
//     }
//     return fact;
// }

// // Driver code
// let num = 5;
// document.write("Factorial of "
//     + num + " is "
//     + factorial(num) + "<br>");


//problem 2

// function sumOfSeries( n)
// {
//     x = (n * (n + 1) / 2)
//     return (x * x)
// }
 
// // Driven Program
 
//     let n = 2;
//     document.write(sumOfSeries(n));

// problem 3

// JavaScript program to find the area of a triangle

// const side1 = parseInt(prompt('Enter side1: '));
// const side2 = parseInt(prompt('Enter side2: '));
// const side3 = parseInt(prompt('Enter side3: '));

// // calculate the semi-perimeter
// const s = (side1 + side2 + side3) / 2;

// //calculate the area
// const areaValue = Math.sqrt(
//   s * (s - side1) * (s - side2) * (s - side3)
// );

// console.log(
//   `The area of the triangle is ${areaValue}`
// );

//problem 4


// var getDaysInMonth = function(month,year) {
//     // Here January is 1 based
//     //Day 0 is the last day in the previous month
//    return new Date(year, month, 0).getDate();
//   // Here January is 0 based
//   // return new Date(year, month+1, 0).getDate();
//   };
//   console.log(getDaysInMonth(1, 2012));
//   console.log(getDaysInMonth(2, 2012));
//   console.log(getDaysInMonth(9, 2012));
//   console.log(getDaysInMonth(12, 2012));

// problem 5

// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(12);
// fToC(12);

//problem 6

// function numberSum(N) {
//     var total = 0;
//       for(var i = 1; i <= N; i++){
//         total += i;
//       }
//       return total;
//   }
  
//   let result = numberSum(10);
//   console.log(result);

//problem 7

// function printSeries( N)
// {
//     let ith_term = 0;
 
//     // Generate the ith term and
//     // print it
//     for (let i = 1; i <= N; i++)
//     {
//         ith_term = i % 2 == 0
//                        ? 2 * i * i + 1
//                        : 2 * i * i - 1;
//         document.write( ith_term + ", ");
//     }
// }
 
// // Driver Code
//     let result = printSeries(18);
 
//     console.log(result);


//problem 8

// var string = "this is a string";
// var length = 10;
// var trimmedString = string.substring(0, length);

// console.log(trimmedString);

//problem 9

// // program to solve quadratic equation
// let root1, root2;

// // take input from the user
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// // calculate discriminant
// let discriminant = b * b - 4 * a * c;

// // condition for real and different roots
// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // condition for real and equal roots
// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // if roots are not real
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

//     // result
//     console.log(
//     `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//   );
// }

//problem 10

// function AlternateRearrange(arr, n)
// {
//     // Sort the array
//     arr.sort((a,b)=>a-b);
 
//     var v1 = []; // to insert even values
//     var v2 = []; // to insert odd values
 
//     for (var i = 0; i < n; i++)
//         if (arr[i] % 2 == 0)
//             v1.push(arr[i]);
//         else
//             v2.push(arr[i]);
 
//     var index = 0, i = 0, j = 0;
 
//     var flag = false;
 
//     // Set flag to true if first element is even
//     if (arr[0] % 2 == 0)
//         flag = true;
 
//     // Start rearranging array
//     while (index < n) {
 
//         // If first element is even
//         if (flag == true) {
//             arr[index++] = v1[i++];
//             flag = !flag;
//         }
 
//         // Else, first element is Odd
//         else {
//             arr[index++] = v2[j++];
//             flag = !flag;
//         }
//     }
 
//     // Print the rearranged array
//     for (i = 0; i < n; i++)
//         document.write( arr[i] + " ");
// }
 
// // Driver code
// var arr = [5, 3, 9, 1, 44, 6];
// var n = arr.length;
// AlternateRearrange(arr, n);

//problem 11

// function asc(arr) {
//     let map = new Map
//     for (let i = 0; i < arr.length; i++) {
//         if (map.has(arr[i])) {
//             map.set(arr[i], map.get(arr[i]) + 1)
//         }
//         else {
//             map.set(arr[i])
//         }
//     }
//     let narr = [...map];
//     let tmp;
//     for (i = 0; i < narr.length; i++) {
//         for (j = i + 1; j < narr.length; j++) {
//             if (narr[i][1] > narr[j][1]) {
//                 tmp = narr[i];
//                 narr[i] = narr[j];
//                 narr[j] = tmp;
//             }
//             else if ((narr[i][1] = narr[j][1])) {
//                 if (narr[i][0] > narr[j][0]) {
//                     tmp = narr[i];
//                     narr[i] = narr[j];
//                     narr[j] = tmp;
//                 }
//             }
//         }
//     }
//     return narr;
// }
// arr = [3, 3, 4, 4, 7, 8];
// console.log(asc(arr));

//problem 12


    // // A Javascript program to generate palindromic
    // // numbers less than n.
     
    // // A utility for creating palindrome
    // function createPalindrome(input, b, isOdd)
    // {
    //     let n = input;
    //     let palin = input;
 
    //     // checks if number of digits is odd
    //     // or even if odd then neglect the
    //     // last digit of input in finding reverse
    //     // as in case of odd number of digits
    //     // middle element occur once
    //     if (isOdd == 1)
    //         n = parseInt(n / b, 10);
 
    //     // Creates palindrome by just appending
    //     // reverse of number to itself
    //     while (n > 0)
    //     {
    //         palin = palin * b + (n % b);
    //         n = parseInt(n / b, 10);
    //     }
    //     return palin;
    // }
 
    // // Function to print decimal
    // // palindromic number
    // function generatePalindromes(n)
    // {
    //     let number;
 
    //     // Run two times for odd and even
    //     // length palindromes
    //     for (let j = 0; j < 2; j++)
    //     {
 
    //         // Creates palindrome numbers with first
    //         // half as i. Value of j decided whether
    //         // we need an odd length of even length
    //         // palindrome.
    //         let i = 1;
    //         while ((number = createPalindrome(i, 10, j % 2)) < n)
    //         {
    //             document.write(number + " ");
    //             i++;
    //         }
    //     }
    // }
     
    // let n = 5;
    // generatePalindromes(n);
     
//problem 13

// // JavaScript program to find N-th term
// // in the series
 
// // Function to find N-th term
// // in the series
// function findNthTerm(n)
// {   
//     // If n is even
//     if (n % 2 == 0) {
//         n = Math.floor(n / 2);
//         n = 2 * (n - 1);
//         document.write(Math.floor(n / 2) + "<br>");
//     }
//     // If n is odd
//     else {
//         n = Math.floor(n / 2) + 1;
//         n = 2 * (n - 1);
//         document.write(n + "<br>");
//     }
// }
   
// // Driver code
 
//     let X = 5;
//     findNthTerm(X);
       
//     X = 7;
//     findNthTerm(X);




//**PROBLEM 14**

// // JavaScript implementation of left rotation of
// // an array K number of times
 
// // Function to leftRotate array multiple times
// function leftRotate(arr, n, k){
//     /* To get the starting point of rotated array */
//     let mod = k % n;
 
//     // Prints the rotated array from start position
//     for (let i = 0; i < n; i++)
//         document.write((arr[(mod + i) % n]) + " ");
 
//     document.write("\n");
// }
 
// // Driver Code
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = arr.length;

 
// k = 3;
// // Function Call
// leftRotate(arr, n, k);
// document.write("<br>");


//**PROBLEM 15**


// // Javascript program to evaluate value of a postfix expression
 
// // Method to evaluate value of a postfix expression
// function evaluatePostfix(exp)
// {
//     //create a stack
//         let stack=[];
          
//         // Scan all characters one by one
//         for(let i=0;i<exp.length;i++)
//         {
//             let c=exp[i];
              
//             // If the scanned character is an operand (number here),
//             // push it to the stack.
//             if(! isNaN( parseInt(c) ))
//             stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
              
//             //  If the scanned character is an operator, pop two
//             // elements from stack apply the operator
//             else
//             {
//                 let val1 = stack.pop();
//                 let val2 = stack.pop();
                  
//                 switch(c)
//                 {
//                     case '+':
//                     stack.push(val2+val1);
//                     break;
                      
//                     case '-':
//                     stack.push(val2- val1);
//                     break;
                      
//                     case '/':
//                     stack.push(val2/val1);
//                     break;
                      
//                     case '*':
//                     stack.push(val2*val1);
//                     break;
//               }
//             }
//         }
//         return stack.pop();  
// }
 
// // Driver program to test above functions
// let exp="531*+9-"
// document.write("postfix evaluation: "+evaluatePostfix(exp));