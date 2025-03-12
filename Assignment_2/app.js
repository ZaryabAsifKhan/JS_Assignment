// VARIABLES NAMES : LEGAL $& ILLEGAL

// Q1: 1. Declare 3 variables in one statement.

// CODE:
// let a = 1, b = 2, c = 3;

// 2. Declare 5 legal & 5 illegal variable names.

// LEGAL VARAIBLES:
let myName= "Zaryab";
let total_value= 20;
let $price= 30;
let _age= 22;
let number10= 40;

// ILLEGAL VARIABLES:

// CODE:
// let 12shoes= "my shoes";
// let my name= "Zaryab";
// let @price= 20;
// let total-value= 40;
// let for;

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write("<h1>Rules For Naming JS Variables</h1>")
document.write("<p>Variable names can only contains numbers, $ and _. For example : $my_1stVariable</p>")
document.write("<p>Variable must begin with letter, $ and _. For example : $name, _name, name</p>")
document.write("<p>Variable names are case sensitve</p>")
document.write("<p>Variable names should not be keyword of JS</p>")

// JS MATH EXPRESSIONS:
// Q1) Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// Adddition
let x=5;
let y=3;
let sum = x+y;
document.write(`The Sum of ${x} And ${y} is ${sum}<br>`);
// Q2) Repeat task1 for subtraction, multiplication, division & modulus.
// Subtaction
let d=5;
let e=3;
let difference = d-e;
document.write(`The Difference of ${d} And ${e} is ${difference} <br>`);

// Multiplication
let f=5;
let g=3;
let product = f*g;
document.write(`The Product of ${f} And ${g} is ${product}<br>`);

// Divivsion
let m=5;
let n=3;
let division = m/n;
document.write(`The Division of ${m} And ${n} is ${division}<br>`);

// Modulus
let p=5;
let q=3;
let mod = p%q;
document.write(`The Modulus of ${p} And ${q} is ${mod}`);

// Q3) Do the following using JS Mathematic Expressions:
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
 let num=5;
 console.log(`Initial value is ${num}`)
 num++;
 console.log(`Value after increment is ${num}`)
 num=num+7;
 console.log(`Value after addition is ${num}`)
 num--;
 console.log(`Value after decrement is ${num}`)
 num=num%3;
 console.log(`The remainder is ${num}`)

// Q4) Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

let ticket= 600
ticket = ticket * 5;
document.write(`<p>The Cost of buying 5 tickets is ${ticket}PKR to a movie.</p>`)

// Q5) Write a script to display multiplication table of any number in your browser.
document.write("<h2>Table of 4</h2>")
for(let i=1; i<=10;i++){
    document.write(`4 x ${i} = ${4*i}<br>`)
}

// Q6) The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// CODE:
// let number=+prompt("Enter the Number");
// let cel = (number-32)* 5/9;
// document.write(`${number}<sup>0</sup>F = ${cel}<sup>0</sup>C`);

// let number=+prompt("Enter the Number");
// let faren = (number * 9/5) + 32;
// document.write(`${number}<sup>0</sup>C = ${faren}<sup>0</sup>F`);

// // Q7) Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables:

// :CODE:
// document.write("<h3>Shopping Cart</h3>")
// let price1=650;
// let item1= prompt("Enter the item 1");
// document.write(`Price of ${item1} is ${price1}PKR <br>`)
// let quan1= +prompt("Enter the Quantity");
// document.write(`Quantity of ${item1} is ${quan1}<br>`)
// let price2=750;
// let item2= prompt("Enter item 2")
// document.write(`Price of ${item2} is ${price2}PKR <br>`)
// let quan2= +prompt("Enter Quantity")
// document.write(`Quantity of ${item2} is ${quan2}<br>`)
// let ship_chr=200;
// document.write(`Shipping Charges are ${ship_chr}PKR <br><br>`)
// let total_price= (price1*quan1) + (price2*quan2) + ship_chr;
// document.write(`Total cost of your order is ${total_price}PKR`)

// Q8) Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// CODE:
// document.write("<h3>MarkSheet</h3>")
//  let total_marks= +prompt("Enter total marks");
//  document.write(`Total marks = ${total_marks}<br>`);
//  let obt_marks = +prompt("Enter obtained marks");
//  document.write(`Marks obtained = ${obt_marks}<br>`)
//  let per=(obt_marks/total_marks)*100;
//  document.write(`Percentage = ${per}<br>`);
//  if(per<=60){
//     document.write("C Grade");
//  }
//     else if(per<=70){
//         document.write("B Grade");
//     }
//    else if(per<=80){
//     document.write("A Grade");
//    } 
//  else {
//     document.write("A+ Grade")
//  }

// Q9) Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
// (Exchnge rates : 1 US Dollar = 280 Pakistani Rupee nd 1 Saudi Riyal = 75 Pakistani Rupee)

// CODE:
// document.write('<h2>Money Exchange</h2>')
// let usd= 280;
// let riyal= 75;
// let quan1= +prompt("Enter the amount");
// let quan2= +prompt("Enter the amount");
// let total= (`${quan1*usd}`  + `${quan2*riyal}`);
// document.write(`The Total Currency in PKR=${total}`);

// Q10) Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
let value= 9;
value=(value+5)*10/2;
console.log(value);

// Q11) The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NNyears old”.

// CODE:
//  document.write("<h2>Age Calculator</h2>")
// let year=+prompt("Enter current year");
// let birth=+prompt("Enter birth year");
// let age1=(year-birth);
// let age2=(age1-1);
// document.write(`Current year = ${year}<br>`);
// document.write(`Birth year = ${birth}<br>`);
// document.write(`Your age = ${age1} OR ${age2}`);

// Q12) The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “Thearea is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// CODE:
//  document.write("<h2>GEOMETRIZER</h2>");
//  let radius=+prompt("Enter Radius");
//  let circum= 2*(3.142)*radius;
//  let area=(3.142)*radius*radius;
//  document.write(`Radius of a circle = ${radius}<br>`)
//  document.write(`Circumference of a circle = ${circum}<br>`)
//  document.write(`Area of a circle = ${area}<br>`)

// Q13) The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// CODE:
// document.write("<h2>The Life Time Supply Calculator</h2>");
// let fvrtSnk= prompt("Enter Your Favourite Snack")
// let yourAge=+prompt("Enter Your Current Age");
// let maxAge=+prompt("Enter Your Maximum Age");
// let snacksAmnt=+prompt("Amount Of Snacks Per Day");
// let cal= (maxAge-yourAge)*snacksAmnt;
// document.write(`You will need ${cal} ${fvrtSnk} to last you until the ripe old age ${maxAge}`);

// JS MATH EXPRESSIONS:
// Q1) Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// CODE:
// document.write("<br>Result:<br>");
// let a=+prompt("Enter a number");
// document.write(`The value of a is : ${a}<br>`);
// document.write(".....................................<br><br>");
// a= ++a;
// document.write(`The value of ++a is : ${a}<br>`);
// document.write(`Now the value of a is : ${a}<br><br>`);
// document.write("The value of a++ is :"+ (a++)+ '<br>');
// document.write("Now the value of a is :" + a +'<br><br><br>');
// document.write("Now the value of --a is :" + (--a) +'<br>');
// document.write("Now the value of a is :" + a +'<br><br><br>');
// document.write("The value of a-- is :"+ (a--)+ '<br>');
// document.write("Now the value of a is :" + a +'<br><br><br>');

// Q2) What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// CODE:
// var a=+prompt("Enter the value of a");
// var b=+prompt("Enter the value of b");
// document.write(`a = ${a}<br>`);
// document.write(`b = ${b}<br>`);
// var eq= --a - --b + ++b + b--;
// document.write(`Result = ${eq}`);

// Q3) Write a program that takes input a name from user & greet the user.
//  Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// CODE:
// let user= prompt("Enter Your Name");
// alert(`Hello! ${user} What's up`);
// document.write(`<h2>Mutiplication Table</h2>`)
// var number = prompt("Enter a number:");

//         if (number === "") {
//             number = 5;
//         }
//         if (number === null) {
//             number = 5;
//         }

//         for (var i = 1; i <= 10; i++) {
//             document.write(number + " x " + i + " = " + (number * i) + "<br>");
//         }

// Q4): 
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show theresult in browser like this.(Hint: user table)

// CODE:
let totalMarksPerSubject= 100;
let subject1=+prompt("Enter Your Maths Number");
let subject2=+prompt("Enter Your Physics Number");
let subject3=+prompt("Enter Your Chemistry Number");
let subject4=+prompt("Enter Your Computer Number");
let subject5=+prompt("Enter Your PST Number");
let subject6=+prompt("Enter Your Sindhi Number"); 
let subject7=+prompt("Enter Your English Number"); 
let totalObtainedMarks= subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7;
let totalMarks= totalMarksPerSubject*7
let percentage= (totalObtainedMarks / totalMarks) * 100;
document.write("<h2>Result Sheet</h2>")
document.write("<table border='1' width='50%'>");
document.write("<tr><th>Subjects</th><th>Total Marks</th><th>Obtain Marks</th></tr>");
document.write(`<tr><td>Maths</td><td>100</td><td>${subject1}</td></tr>`);
document.write(`<tr><td>Physics</td><td>100</td><td>${subject2}</td></tr>`);
document.write(`<tr><td>Chemistry</td><td>100</td><td>${subject3}</td></tr>`);
document.write(`<tr><td>Computer</td><td>100</td><td>${subject4}</td></tr>`);
document.write(`<tr><td>PAK.St</td><td>100</td><td>${subject5}</td></tr>`);
document.write(`<tr><td>Sindhi</td><td>100</td><td>${subject6}</td></tr>`);
document.write(`<tr><td>English</td><td>100</td><td>${subject7}</td></tr>`);
document.write(`<tr><th colspan='2'>Total Marks</th><td>${totalObtainedMarks}</td></tr>`);
document.write(`<tr><th colspan='2'>Percentage</th><td>${percentage} %</td></tr>`);
document.write("</table>");