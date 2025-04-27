// chapter 04

//Question 01
//Answer

// var firstVariable, secondVariable, thirdVariable;

//Question 02
//Answer

// legal variables
//myClass
//$myself
//_myvariable
//my_Variable

// ILLEGAL VARIABLES
// 1name  "number in the start"
// my-Self "hyphens"
// function "javascript reserve words"
// my*Self   "any operator"
// const    "javascript reserve words"

//Question 03
// PART A
//Answer

// document.write('<h1>Rules for naming JS variables<h1> <br>');
//parts
//Answer
//  document.write("a)Variable can only contain numbers,$ and _ .For example $my_1stVariable <br>");
//  document.write("b)Variables must begin with a Letters,$ and _ . For example $name, _name or name <br>");
//  document.write("c)Variable names are case <br>");
//  document.write("d)Variable names should not be JS");


//chapter 05

//Question 01
//Answer

// var num01=3;
// var num02=5;

// var result=num01+num02;

// document.write("sum 0f "+num01+" and "+num02+" is "+result);

//Question 02
//Answer

// for subtraction
// var num01=3;
// var num02=5;

// var result=num01-num02;

// document.write("subtratctin 0f "+num01+" from "+num02+" is "+result);

// for multiplication
// var num01=3;
// var num02=5;

// var result=num01*num02;

// document.write("multipilcation 0f "+num01+" and "+num02+" is "+result);

//for division
// var num01=3;
// var num02=5;

// var result=num01/num02;

// document.write("division 0f "+num01+" and "+num02+" is "+result);


//Question 03
//Answer

//A
// var my_Variable;

//B
// document.write("value of variable after declaration is ?? <br>");

//C
// my_Variable=8;

//D
// document.write("Initial value: "+ my_Variable);

//E
// my_Variable++;

//F
// document.write("<br>After increment: "+ my_Variable);

//G
// RESULT=my_Variable+7;

//H
// document.write("<br>After adding 7: "+ RESULT);

//I
// RESULT--;
// document.write("<br>After decrement: "+ RESULT);

//J
// myAnswer=RESULT%3;

//k
// document.write("<br>After dividing, the reminder is: " +myAnswer);

//Question 04
//Answer

// tickets=5;
// oneticket=600;
// total=oneticket*tickets;

// document.write("Total cost of "+tickets+" tickets to a movie is "+total+"PKR" );

//Question 05
//Answer

// var table = 4;
// document.write(table + " x " + 1 + " = " + (table * 1) + "<br>");
// document.write(table + " x " + 2 + " = " + (table * 2) + "<br>");
// document.write(table + " x " + 3 + " = " + (table * 3) + "<br>");
// document.write(table + " x " + 4 + " = " + (table * 4) + "<br>");
// document.write(table + " x " + 5 + " = " + (table * 5) + "<br>");
// document.write(table + " x " + 6 + " = " + (table * 6) + "<br>");
// document.write(table + " x " + 7 + " = " + (table * 7) + "<br>");
// document.write(table + " x " + 8 + " = " + (table * 8) + "<br>");
// document.write(table + " x " + 9 + " = " + (table * 9) + "<br>");
// document.write(table + " x " + 10 + " = " + (table * 10) + "<br>");

//Question 06
//Answer

// var celsiusnum=25;
// var farennum=70;
// var celsius ="oC";
// var farenheit ="oF";

// calculatefarenheit=(celsiusnum*9/5)+32;
// calculatecelsius=(farennum-32)*5/9;

// document.write(celsiusnum+celsius+" is "+calculatefarenheit+farenheit +"<br>");
// document.write(farennum+farenheit+" is "+calculatecelsius+celsius);


//Question 07
//Answer

// document.write("<h1>SHOPPING CART</h1>");
 
// var item01=650;
// var item02=100;
// var qty01=3;
// var qty02=7;
// var ship=100;

// document.write("Price of item01 is "+item01+"<br/>");
// document.write("Quantity of item01 is "+qty01+"<br/>");
// document.write("Price of item02 is "+item02+"<br/>");
// document.write("Quantity of item02 is "+qty02+"<br/>");
// document.write("Shipping price is "+ship+"<br/>");

// total=(item01*qty01)+(item02*qty02)+ship;

// document.write("Total cost of your order is "+total);

//Question 08
//Answer

// var totalMarks =980;
// var marksobtained =830;
// var percentage = (marksobtained/totalMarks)*100;
// document.write("<h1>Marksheet</h1> <br>")
// document.write("total marks = "+totalMarks +"<br/>");
// document.write("Obtained marks = "+marksobtained +"<br/>");
// document.write("Percentage obtained is "+percentage+"%");

//Question 09
//Answer

// var dollars=10;
// var saudiRiyal=25;

// var exchangeRate=(dollars*300)+(saudiRiyal*100);
// document.write("<h1>Currency in PKR</h1> <br/>");
// document.write("Total currency in PKR is "+exchangeRate);


//Question 10
//Answer

// var number=45;
// var calculate=(((number+5)*10)/2);
// document.write("After doing some calculation the value is "+calculate);

//Question 11
//Answer

// var currentYear=2024;
// var birthYear=2004;
// var age=currentYear-birthYear;
// document.write("<h1>Age calculator</h1>")
// document.write("Current year: "+currentYear+"<br>" )
// document.write("birth year: "+birthYear +"<br>")
// document.write("Your age is "+age);

//Question 12
//Answer

// let radius=prompt("Enter radius:");
// let pi=3.142;
// let circumference=2*pi*radius;
// let area=pi*(radius*radius);

// document.write("<h1>The Geometrizer</h1>")
// document.write("Radius of a circle is "+radius +"<br>");
// document.write("The circumference is "+circumference+"<br>");
// document.write("The area is"+area);

//Question 13
//Answer

// let favSnack=prompt("Enter your favourite snack:");
// let currentAge=prompt("Enter your current age:");
// let maxAge=prompt("Enter your max age:");
// let estimatePerDay=prompt("Enter your amounts of snack per day");
// let total=(maxAge-currentAge)*estimatePerDay;

// document.write("<h1>The Lifetime Supply Calculator:</h1>");
// document.write("Favorite snack: "+favSnack+"<br>");
// document.write("Estimated Maximum age: "+maxAge+"<br>");
// document.write("Current age: "+currentAge+"<br>");
// document.write("Amount of snacks per day: "+estimatePerDay+"<br>");
// document.write("You will need "+total+" to last you until the ripe old age of "+maxAge);

//CHAPTER 06

//Question 01;
//Answer

// var a=10;
// document.write("The value of a is "+a +"<br>");
// document.write("-------------------------------------"+"<br></br>");


// document.write("The value of ++a is " + ++a +"<br>");
// document.write("Now the value of a is "+a +"<br></br>")

// document.write("The value of a++ is " + a++ +"<br>");
// document.write("Now the value of a is "+a +"<br></br>")

// document.write("The value of --a is " + --a +"<br>");
// document.write("Now the value of a is "+a +"<br></br>")

// document.write("The value of a-- is " + a-- +"<br>");
// document.write("Now the value of a is "+a)


//Question 02;
//Answer

// var a=2;
// var b=1;


// document.write("The value of --a is " + --a +"<br>");1
// document.write("The value of --a - --b  is " + (--a - --b) +"<br>");1-0
// document.write("The value of --a - --b + ++b  is " + (--a - --b + ++b) +"<br>");1-0+1
// document.write("The value of --a - --b + ++b + b--  is " + (--a - --b + ++b + b--) +"<br>");1-0+1+1

// var result= --a - --b + ++b + b--;1-0+1+1

// document.write("The value of a " + a+"<br>");
// document.write("The value of b " + b+"<br>");
// document.write("The result is " + result+"<br>");

//Question 03;
// Answer

// let name = prompt("Enter your name:");
// let gender = prompt("Enter your gender:");

// if(name==""){
//     document.write("please enter your name"+"<br>");
// }
// if(gender=="male"){
//     document.write("Hello Mr."+name);
// }
// else if(gender=="female"){
//     document.write("hello Mrs "+name);
// }
// else if(gender==""){
//     document.write("please enter your gender"+"<br>");
// }

//Question 04;
// Answer

// let num =prompt("Enter your table number:");

// if (num === "" || num===null ){
//     document.write("Please enter a number");
// }

// else if (true){
//     document.write(num + " x " + 1 + " = " + (num * 1) + "<br>");
//     document.write(num + " x " + 2 + " = " + (num * 2) + "<br>");
//     document.write(num + " x " + 3 + " = " + (num * 3) + "<br>");
//     document.write(num + " x " + 4 + " = " + (num * 4) + "<br>");
//     document.write(num + " x " + 5 + " = " + (num * 5) + "<br>");
//     document.write(num + " x " + 6 + " = " + (num * 6) + "<br>");
//     document.write(num + " x " + 7 + " = " + (num * 7) + "<br>");
//     document.write(num + " x " + 8 + " = " + (num * 8) + "<br>");
//     document.write(num + " x " + 9 + " = " + (num * 9) + "<br>");
//     document.write(num + " x " + 10 + " = " + (num * 10) + "<br>");
// }

//Question 05;
// Answer


// let sub01=prompt("Enter your 1st subject name:")
// let totalMarks01=+prompt("Enter total Marks:");
// let obtainedMarks01=+prompt("Enter obtained marks from 100:");
// let percentage01=(obtainedMarks01/totalMarks01)*100;



// let sub02=prompt("Enter your 2nd subject name:")
// let totalMarks02=+prompt("Enter total Marks:");
// let obtainedMarks02=+prompt("Enter obtained marks from 100:");
// let percentage02=(obtainedMarks02/totalMarks02)*100;

// let sub03=prompt("Enter your 3rd subject name:")
// let totalMarks03=+prompt("Enter total Marks:");
// let obtainedMarks03=+prompt("Enter obtained marks from 100:");
// let percentage03=(obtainedMarks03/totalMarks03)*100;


// let totalMarks=totalMarks01+totalMarks02+totalMarks03;
// let totalobtainedMarks=(obtainedMarks01+obtainedMarks02+obtainedMarks03);
// let totalpercentage=(percentage01+percentage02+percentage03)/3;


// document.write(`
//     <h1>Result</h1>
//     <table>
//         <tr>
//             <th>Subject</th>
//             <th>Total Marks</th>
//             <th>Obtained Marks</th>
//             <th>Percentage</th>
//         </tr>
//         <tr>
//             <td>${sub01}</td>
//             <td>${totalMarks}</td>
//             <td>${obtainedMarks01}</td>
//             <td>${percentage01}</td>
//         </tr>
//         <tr>
//             <td>${sub02}</td>
//             <td>${totalMarks}</td>
//             <td>${obtainedMarks02}</td>
//             <td>${percentage02}</td>

//         </tr>
//         <tr>
//             <td>${sub03}</td>
//             <td>${totalMarks}</td>
//             <td>${obtainedMarks03}</td>           
//             <td>${percentage03}</td>

//         </tr>

//         <tr>
//             <td><strong>Total</strong></td>
//             <td><strong>${totalMarks}</strong></td>
//             <td><strong>${totalobtainedMarks}</strong></td>
//             <td><strong>${totalpercentage}</strong></td>

//         </tr>
//     </table>
// `);

// document.write("The percentage of your obtained marks is " + totalpercentage);


















