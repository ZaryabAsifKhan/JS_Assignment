// JAVASCRIPT ALERTS ASSIGNMENTS:

// Q1) Write a script to greet your website visitor using JS alert box.

alert("Welcome to the Website");

// Q2) Write a script to display following message on your webpage:

alert("Error! Please enter a valid password.");

// Q3) Write a script to display following message on your webpage: (Hint : Use line break)

alert("Welcome to JS Land... \n Happy Coding!");

// Q4) Write a script to display following messages in sequence:

alert("Welcome to JS Land...");
alert("Happy Coding \n Prevent this page from creating additional dialogs.");

// Q5) Generate the following message through browser’s developer console:

alert("See web browser's console.");
console.log("Hello... I can run JS through my web browser's console.");

// Q6) Make use of alerts in your new/existing HTML & CSS project.
// Ans) I had tried this in my previos projects.

// Q7) Practice placement of <script></script> element in

// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// Ans) Best Practice is to add js after html content because first content loads then js loads.



// JS VARIABLES FOR STRINGS:

// Q1) Declare a variable called "username"

let username;

// Q2) Declare a variable called myName & assign to it a string that represents your Full Name.

let myName = "Zaryab Asif Khan"

// Q3) Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

let message = "Hello World"
alert(message);

// Q4) Write a script to save student’s bio data in JS variables and show the data in alert boxes.

let Student = "Zaryab Asif Khan"
let myAge = 21
let course= "Certified Mobile Application Development"
alert(Student);
alert(myAge);
alert(course);

// Q5) Write a script to display the following alert using one JS variable:

let word = "PIZZA\n PIZZ\n PIZ\n PI\n P"
alert(word);

// Q6) Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com) .Show the blow mentioned message in an alert box.(Hint: usestring concatenation)

let myEmail = "My email address is " + "zaryabasifkhan925@gmail.com"
alert(myEmail);

// Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

let book = "A Smarter Way To Learn JavaScript"
alert('Im trying to learn from the Book '+book);

// Q8) Write a script to display this in browser through JS:

document.write("Yah! I can write HTML content through Javascript.")

// Q9) Store following string in a variable and show in alert and browser through JS :

let theEnd = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(theEnd);

// JS VARIABLES FOR NUMBERS:

// Q1) Declare a variable called age & assign to it your age. Show your age in an alert box.

let age = 21
alert("My age is "+ age);

// Q2) Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

let visit = 14
alert("You haave visited this site "+visit+ " times");

// Q3) Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

let birthYear = 2003
document.write(" My Birth Year is "+birthYear+"\n Data type of my declared variable is number.")

// Q4) A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

let customer = "Jhon Doe"
let product = "T-shirt(s)"
let quantity = 5
document.write(`${customer} ordered ${quantity} ${product} on XYZ Clothing Store`)
 
