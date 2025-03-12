// USER INPUT & CONDITIONAL STATEMENTS:

// Q1) Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

//  CODE:
// let city = prompt("Enter the City");
// if(city=="Karachi"){
//     console.log("Welcome to city of lights");
// }
// else if(city=="Lahore"){
//     console.log("Welcome to city of gardens");
// }
// else if(city=="Islamabad"){
//     console.log("Welcome to city of peace");
// }
// else{
//     alert("City not found");
// }

// Q2) Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// CODE:
// let gender=prompt("Enter your gender");
// if(gender==="Male"){
//     console.log("Good Morning Sir");
// }
// else if(gender==="Female"){
//     console.log("Good Morning Ma'am");
// }
// else{
//     alert("Error! gender not found");
// }

// Q3) Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// CODE:
// let signal=prompt("Enter traffic signal color");
// if(signal==="Red"){
//     console.log("Must Stop");
// }
// else if(signal==="Yellow"){
//     console.log("Ready to move");
// }
// else if(signal==="Green"){
//     console.log("Move Now");
// }
// else{
//     alert("This not a color of traffic signal")
// }

// Q4) Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// CODE:
// let fuel =+prompt("Enter your remaining fuel");
// if(fuel<=0.25){
//     alert("Please refil the fuel in your car");
// }
// else{
//     console.log("You have enough fuel to survive");
// }

// Q5) Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// code:
//  let a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// < XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxx >

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// code:
// let b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else{
//     console.log("given condition for variable b is  not true");
// }

// < XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxx >

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// code:
// let c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// else{
//     console.log("condition 1 is not true");
// }

// < XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxx >

// if (c === 13){
// alert("condition 2 is true");
// }

// code:
// if (c === 13){
// alert("condition 2 is true");
// }
// else{
//     console.log("condition 2 is not true");
// }

// < XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxx >

// if (++c < 14){
//     alert("condition 3 is true");
//     }

// code:
// if (++c < 14){
//     alert("condition 3 is true");
//     }
// else{
//     console.log("condition 3 is not true");
//     }

// < XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxx >

// if(c === 14){
// alert("condition 4 is true");
// }

// code:
// if(c === 14){
//     alert("condition 4 is true");
//     }
// else{
//     console.log("condition 4 is not true");
// }

// < XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxx >

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// code:
// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// else{
//     console.log("The cost not equals");
// }

// < XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxx >

// e. if (true){
//     alert("True");
//     }

// code:
// if (true){
//     alert("True");
//     }
// else{
//     console.log("False");
// }

// < XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxx >

// if (false){
//     alert("False");
//     }

// code:
// if (false){
//     alert('false');
//     }
// else{
//     console.log("True");
// }

// < XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxx >

// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// code:
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
//     else{
//         console.log("not true");
//     }

// Q5) Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// CODE:
// let totalMarksPerSubject=300;
// let marks1=+prompt("Enter Your Maths Marks");
// let marks2=+prompt("Enter Your Physics Marks");
// let marks3=+prompt("Enter Your Chemistry Marks");
// let obtainMarks= marks1+marks2+marks3;
// let result= (obtainMarks / totalMarksPerSubject) * 100;
// let remarks1=(" Sorry");
// let remarks2=(" You need to improve");
// let remarks3=(" Good");
// let remarks4=(" Exellent");
// document.write(`Total Marks: ${totalMarksPerSubject}<br>`);
// document.write(`Obtain Marks: ${obtainMarks}<br>`);
// document.write(`Percentage: ${result}%<br>`);
// if(result<60){
//     document.write(` Grade: Fail: <br> Remarks: ${remarks1}`);
// }
// else if(result<=70){
//     document.write(`Grade: B <br> Remarks: ${remarks2}`);
// }
// else if(result<=80){
//     document.write(`Grade: A <br> Remarks: ${remarks3}`);
// }
// else if(result<=90){
//     document.write(`Grade: A+ <br> Remarks: ${remarks4}`);
// }

// Q6) Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// CODE:
// let num=7;
// let user=+prompt("Guess the Number from (1-10)");
// if(user===num){
//     alert("Bingo! Correct Answer");
// }
// else if(user===num-1){
//     document.write("<strong>Close enough to the correct answer</strong>");
// }
// else if(user===num+1){
//     document.write("<strong>Far enough to the correct answer</strong>");
// }
// else{
//     alert("Better Luck Next Time!");
// }

// Q7) Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// CODE:
// let number=+prompt("Enter any number");
// if(number % 3 === 0){
// alert("Yeah, the number is divisible by 3");
// }
// else{
//     document.write("<strong>This number is not divisible by 3</strong>");
// }

// Q8) Write a program that checks whether the given input is an even number or an odd number.

// CODE:
// let input=+prompt("Enter the Number");
// if(input % 2 === 0){
//     alert("This is an Even Number");
// }
// else{
//     document.write("<strong>This is an Odd Number</strong>");
// }

// Q9) Write a program that takes temperature as input and shows a message based on following criteria:
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// CODE:
// let temp=+prompt("Enter Current Temperature");
// if(temp>40){
//     alert("It is too hot outside.")
// }
// else if(temp>30){
//     document.write("<strong>The Weather Today is Normal.</strong>");
// }
// else if(temp>20){
//     document.write("<strong>Today's Weather is Cool.</strong>");
// }
// else if(temp>10){
//     alert("<strong>OMG! Today's Weather is so Cool.</strong>");
// }
// else{
//     document.write("<strong> ERROR!.</strong>");
// }

// Q10) Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// CODE:
// let num1=+prompt("Enter First Value");
// let opt=prompt("Enter Operator");
// let num2=+prompt("Enter Second Value");

// if(opt==="-"){
//     console.log(num1-num2);
// }
// else if(opt==="+"){
//     console.log(num1+num2);
// }
// else if(opt==="*"){
//     console.log(num1*num2);
// }
// else if(opt==="/"){
//     console.log(num1/num2);
// }
// else if(opt==="%"){
//     console.log(num1%num2);
// }
// else{
//     alert("ERROR! 404 FOUND")
// }

// USER INPUT & CONDITIONAL STATEMENTS:

/* Q1) Write a program that takes a character (number or string) in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)*/
 
// CODE:
// let char=prompt("Enter Single Character");
// if (char.length!== 1){
//     alert("Please Enter Single Character");
// }
// let ascii_value = char.charCodeAt(0);
// if(ascii_value >= 48 && ascii_value <= 57){
//     console.log("It's a Number");
// }
// else if(ascii_value >= 65 && ascii_value <= 90){
//     console.log("It is in Upper Case");
// }
// else if(ascii_value >= 97 && ascii_value <= 122){
//     console.log("It is in Lower Case");
// }
// else{
//     alert("It is a Special Character");
// }

// Q2) Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// CODE:
// let num1 = +prompt("Enter First Integer Value");
// let num2 = +prompt("Enter Second Integer Value");
// if(num1===num2){
//     console.log(`${num1} = ${num2}`);
// }
// else if(num1>num2){
//     document.write(`${num1} is Greater than ${num2}`);
// }
// else if(num1<num2){
//     document.write(`${num1} is Less than ${num2}`);
// }
// else{
//     alert("Not an Integer Value")
// }

// Q3) Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// CODE:
// let user=+prompt("Enter a Number");
// if(user===0){
//     console.log("Zero");
// }
// else if(user<0){
//     console.log("Negative Value");
// }
// else if(user>0){
//     console.log("Positive Number");
// }
// else{
//     alert("Error!");
// }

// Q4) Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

// CODE:
// let user=prompt("Enter Character");
// if(user.length !== 1){
//     alert("Please Enter a Single Character");
// }
//  else if(user === 'a' || user === 'i' || user === 'e' || user === 'o' || user === 'u'){
//     console.log("true");
// }
// else{
//     console.log("false")
// }

// Q5) Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show
// “Incorrect password” otherwise.

// CODE:
// let password = "zakwebdev15";
// let user= prompt("Enter your Password");
// if(user === ""){
//     alert("Password Not Found");
// }
// else if(user === password){
//     alert("Correct");
// }
// else{
//     alert("Enter your Correct Password");
// }

// Q6) This if/else statement does not work. Try to fix it:

// CODE:
// var greeting;
// var hour = 13;
// var hour =+prompt("Enter hour");
// if (hour < 18) {
// greeting = "Good day";
// console.log(greeting);
// }
// else{
//  greeting = "Good evening";
// console.log(greeting);
// }

// Q7) Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// CODE:
// let time = +prompt("Enter Time");
// if(time>= 0 && time<1200){
//     console.log("Good Morning");
// }
// else if(time>=1200 && time<1700){
//     console.log("Good AfterNoon");
// }
// else if(time>=1700 && time<2100){
//     console.log("Good Evening");
// }
// else if(time>=2100 && time<2359){
//     console.log("Good Night");
// }
// else{
//     alert("Incorrect Time");
// }