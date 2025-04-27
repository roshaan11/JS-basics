// chapter 09

//question 01
//answer

// let city =prompt("Enter city name:")

// if (city === "" || city=== null) {
//     alert("please enter a city name");
//     let city=prompt("Enter city name:")
//     if (city === "karachi") {
//         alert("welcome to the city of lights");
//     }
//     else if (city !== "karachi") {
//         alert(city + " is the best city");
    
//     }
// }
// else if (city === "karachi") {
//     alert("welcome to the city of lights");
// }
// else if (city !== "karachi") {
//     alert(city + " is the best city");

// }


//question 02
//answer


// let name = prompt("Enter your name:");
// let gender = prompt("Enter your gender:");

// if(name==""){
//     document.write("please enter your name"+"<br>");
// }
// if(gender=="male"){
//     document.write("Good Morning Mr "+name);
// }
// else if(gender=="female"){
//     document.write("Good Morning Mrs "+name);
// }
// else if(gender==""){
//     document.write("please enter your gender"+"<br>");
// }


//question 03
//answer

// let roadTrafficSignal=prompt("Enter colour of road traffic signal:")

// if(roadTrafficSignal==""||roadTrafficSignal==null){
//     alert("Invalid input. Please enter either red, yellow or green.")
// }
// else if(roadTrafficSignal.toLowerCase() ==="red"){
//     alert("MUST STOP ")
// }
// else if(roadTrafficSignal.toLowerCase() ==="yellow"){
//     alert("READY TO MOVE")
// }
// else if(roadTrafficSignal.toLowerCase() ==="green"){
//     alert("MOVE NOW")
// }

//question 04
//answer

// let fuel=prompt("Enter remaining fuel in liters:")

// if(fuel<=1){
//     alert("Please refill the fuel tank")
// }
// else {
//     alert("Enough fuel available")
// }

//question 04
//answer

// var a = 4;

// if (++a === 5){
// alert("given condition for variable a is true");}

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else{
//     alert("given condition for variable b is false");
// }
// console.log(b);

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
   

//question 04
//answer

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



// document.write("<h1>MARKSHEET</h1>");
// document.write("Total marks:"+totalMarks +"<br>");
// document.write("Obtained marks:"+totalobtainedMarks +"<br>");
// document.write("Percentage:"+totalpercentage +"<br>");

// if (totalpercentage>= 80){
//     document.write("Grade: A-one"+"<br>");
//     document.write("Remarks:Excellent Performance")
// }
// else if (totalpercentage>=70){
//     document.write("Grade:A"+"<br>");
//     document.write("Remarks:Good Performance")
// }
// else if (totalpercentage>= 60){
//     document.write("Grade: B"+"<br>");
//     document.write("Remarks:keep it up ")
// }
// else{
//     document.write("Grade:Fail"+"<br>");
//     document.write("Remarks:better luck next time")
// }



//question 04
//answer


// let secretNumber =10;

// let userGuess = +prompt("Guess a number between 1 to 20:");


// if(userGuess>20){
//     alert("Please enter a number between 1-20");
//     let userGuess = +prompt("Guess a number between 1 to 20:");
//     if(userGuess==secretNumber){
//         document.write("Congratulations!! you got the correct answer");
//     }
//     else if(userGuess>secretNumber){
//         document.write("This number is higher");}
//     else if(userGuess<secretNumber){
//           document.write( "This number is lower");}    
// }

// else if(userGuess==secretNumber){
//     document.write("Congratulations!! you got the correct answer");
// }
// else if(userGuess>secretNumber){
//     alert("This number is higher");
   
//     let userGuess = +prompt("Guess a number between 1 to 20:");
    
//     if(userGuess>20){
//         document.write("Please enter a number between 1-20");
//     }
//     else if(userGuess==secretNumber){
//         document.write("Congratulations!! you got the correct answer");
//     }
//     else if(userGuess>secretNumber){
//         document.write("you are guessing higher...better luck next time ");
//     }
//     else if(userGuess<secretNumber){
//         document.write( "you are guessing lower...better luck next time ");
//     }
// }
// else if(userGuess<secretNumber){
//     alert( "This number is lower");

     
//     let userGuess = +prompt("Guess a number between 1 to 20:");
    
//     if(userGuess>20){
//         document.write("Please enter a number between 1-20");
//     }
//     else if(userGuess==secretNumber){
//         document.write("Congratulations!! you got the correct answer");
//     }
//     else if(userGuess>secretNumber){
//         document.write("you are guessing higher...better luck next time ");
//     }
//     else if(userGuess<secretNumber){
//         document.write( "You are guessing lower...better luck next time ");
//     }
// }



//question 05
//answer

// let divisble=+prompt("Enter your number to be divided :");
// let number=+prompt("Enter your number:");

// if(divisble%number==0){
//   document.write("Your number is divisible by "+number); 
// }
// else{
//     document.write("Your number is not divisible by "+number);
// }

//question 06
//answer

// let checkNumber=+prompt("Enter your number to be check either it is even or odd :");

// if(checkNumber%2==0){
//   document.write(checkNumber+" is even number"); 
// }
// else{
//     document.write(checkNumber+" is odd number"); 
// }

//question 07
//answer



// let temp = prompt("Enter temperature:");

// if (temp>=40){
//     document.write("It is too hot outside."):
// }
// else if (temp>=30){
//     document.write("The Weather today is Normal."):
// }
// else if (temp>=20){
//     document.write("Today’s Weather is cool."):
// }
// else{
//     document.write("OMG! Today’s weather is so Cool."):
// }

//question 08
//answer

// let num01 =+prompt("Enter your first number:");
// let operator = prompt("Enter operator :e.g:+,-,*,/,%");
// let num02 =+prompt("Enter your second number:");
// let addition=num01+num02;
// let subtraction=num01-num02;
// let multiplication=num01*num02;
// let division=num01/num02;
// let reminder=num01%num02;

// if(operator=="+"){
//     document.write("Addition of your numbers is "+addition );
// }
// else if(operator=="-"){
//     document.write("Subtraction of your numbers is "+subtraction );
// }
// else if(operator=="*"){
//     document.write("Multiplication of your numbers is "+multiplication );
// }
// else if(operator=="/"){
//     if(num02==0){
//         alert("Cannot divide by zero");
//     }
//     else{
//     document.write("Division of your numbers is "+division );}
// }
// else if(operator=="%"){
//     if(num02==0){
//         alert("your second number must be greater than zero");
//     }
//     else{
//     document.write("Reminder of your numbers is "+ reminder );}
// }
// else{
//     document.write("Invalid operator. Please enter correct operator.");
// }


//chapter 11

//question 01
//answer

// let input = prompt("Enter ASCII number(01-127):");

// if(input>=0 && input<=47 || input>=123 && input<=127){
//     document.write("The entered value neither a number nor alphabet");
// }
// else if(input>=48 && input<=57){
//     document.write("The entered value belongs to a number");
// }
// else if(input>=65 && input<=90){
//     document.write("The entered belongs to alphabet and it is in upper case ");
// }
// else if(input>=97 && input<=122){
//     document.write("The entered belongs to alphabet and it is in lower case ");
// }
// else{
//   document.write("please enter a nmber between 0-127");
// }


//question 02
//answer

// let firstInteger = prompt("Enter your first number:");
// let secondInteger = prompt("Enter your second number:");

// if (firstInteger===secondInteger){
//     document.write("Both numbers are equal.");
// }
// else if(firstInteger>secondInteger) {
//    document.write("The first number is greater than the second.");
// }
// else if(firstInteger<secondInteger) {
//    document.write("The second number is greater than the first one.");
// }

//question 03
//answer

// let number = prompt("Enter your number:");

// if(number=="0"){
//     document.write("The entered number is zero");
// }
// else if(number>"0"){
//     document.write("The entered number is positive");
// }
// else{
//     document.write("The entered number is negative");
// }

//question 04
//answer

// let  word=prompt("Enter only one alphabet:");

// if (word.length>1){
//     alert("please enter one character");
// }

// else if (word==="a" || word==="e"|| word==="i"|| word==="o" || word==="u"){
//     document.write("You enter a vowel");
// }
// else if(word>=0 || word<0){
//     alert("please enter only alphabet");
// }
// else {
// document.write("You enter a consonant");
// }

//question 05
//answer

// let password ="password123";

// let userGuess=prompt("Enter your password:");

// if(userGuess=="" || userGuess==null ){
//    alert("please enter password");
// }
// else if (userGuess===password){
//     document.write("You entered correct password:");
// }
// else {
//     alert("You entered incorrect password:");
// }

//question 06
//answer

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else{
//     greeting = "Good evening";
//     alert(greeting);
// }

//question 07
//answer

// let time =prompt("Enter any time in 24 hours format:");

// if (time=="" || time==null){
//     alert("Please enter time in 24 hours format. e.g. 12:00");
// }
// if (time.length<3 && time.length>4){
//     alert("Please enter time in 24 hours format. e.g. 12:00");
// }
// else if (time=="13:00"){
//     alert("It's 1 pm");

// }
// else if (time=="14:00"){
//     alert("It's 2 pm");
// }
// else if (time=="15:00"){
//     alert("It's 3 pm");
// }
// else if (time=="16:00"){
//     alert("It's 4 pm");
// }
// else if (time=="17:00"){
//     alert("It's 5 pm");
// }
// else if (time=="18:00"){
//     alert("It's 6 pm");
// }
// else if (time=="19:00"){
//     alert("It's 7 pm");
// }
// else if (time=="20:00"){
//     alert("It's 8 pm");
// }
// else if (time=="21:00"){
//     alert("It's 9 pm");
// }
// else if (time=="22:00"){
//     alert("It's 10 pm");
// }
// else if (time=="23:00"){
//     alert("It's 11 pm");
// }
// else if (time=="24:00"){
//     alert("It's 12 pm");
// }
// else{
//     alert("it's "+time+" Am");
// }

// if (time=="0000" &&  time<"1200" || time=="100"  && time<"1200"){
//     alert("Good morning")
// }
// else if (time>="1200" &&  time<="1700" ){
//     alert("Good Afternoon")
// }
// else if (time>="1700" &&  time<="2100" ){
//     alert("Good Evening")
// }
// else if (time>="2100" &&  time<="2400" ){
//     alert("Good Evening")
// }
// else if (time>"2400"){
//     alert("Invalid time")
// }


//simple guess game

// let userGuess=+prompt("Guess any number :");
// alert("Enter guess number again");

// let add=+prompt("Add guess number again:");
// alert("Add 100 of mine in your number");
// let addMine=+prompt("Add 100 of mine in your number");

// alert("Give half in charity");
// let charity=+prompt("Give half in charity:");
// alert("Give half mine");
// let giveGuess=+prompt("Give half mine from 100:");

// document.write("The number you guess is "+ (userGuess+add+addMine-charity-giveGuess) + " :")

 





// let userGuess=+prompt("Guess any number :");
// if (userGuess==""||userGuess==null){
//    for (let i=0; i<3 ; i++){
//     alert("please enter any number");
//     userGuess=+prompt("Guess any number :");
//     if(userGuess!=""){
//         alert("Enter guess number again"); 
//     }
//    }
// }

// let add=+prompt("Add guess number again:");
// while(userGuess!==add){
//     alert("You enter wrong number ");
//     add=+prompt("Add guess number again:");
// }
// alert("Add 100 of mine in your number");

// let addMine=+prompt("Add 100 of mine in your number");
// while(addMine!==100){
//    for(i=0;i<3;i++){
//         addMine =+prompt("Add 100 of mine in your number");
//         if(addMine==100){
//             break;
//         }else{alert("you don't entering 100 please add 100")}
//     }
//  alert("you lost")
// }
// alert("Give half in charity");

// let afterCharity=(userGuess+userGuess+addMine)/2;
// let charity=+prompt("Give half in charity:");
// while(charity!==afterCharity){
//     alert("You don't enter half of your number");
//     charity=+prompt("Give half in charity:");
// }
// alert("Give half mine");

// let giveGuess=+prompt("Give half mine from 100:");
// while(giveGuess!=100/2){
//     alert("Please enter half of my money");
//     giveGuess=+prompt("Give half mine from 100:");
// }
// document.write("The number you guess is "+ (userGuess+add+addMine-charity-giveGuess) + " :")

