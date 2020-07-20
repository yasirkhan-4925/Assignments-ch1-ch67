//task number 1

var numOne=3;
var numTwo=2;
var total;
total=numOne+numTwo;
document.write("<h1> The Sum of " +" "+ numOne+" "+"and"+" "+ numTwo+" "+ "is " +" "+total + "</h1>" +"<br>");



//task number 2 

total=numOne-numTwo;
document.write("<h1> The Subtraction  of " +" "+ numOne+" "+"and"+" "+ numTwo+" "+ "is " +" "+total + "</h1>" +"<br>");

total=numOne*numTwo;
document.write("<h1> The Multiplication of " +" "+ numOne+" "+"and"+" "+ numTwo+" "+ "is " +" "+total + "</h1>" +"<br>");


total=numOne/numTwo;
document.write("<h1> The Division  of " +" "+ numOne+" "+"and"+" "+ numTwo+" "+ "is " +" "+total + "</h1>" +"<br>");

total=numOne%numTwo;
document.write("<h1> The modulus  of " +" "+ numOne+" "+"and"+" "+ numTwo+" "+ "is " +" "+total + "</h1>" +"<br>" +"<br>");




//task number 3

var variable;

document.write(" <h3>value of variable after declaration is  " +" "+ variable +"</h3>" + "<br>");

variable=5;

document.write(" <h3> Initital value  " +" "+ variable +"</h3>" + "<br>");

variable++;

document.write(" <h3> Value after increment " +" "+ variable +"</h3>" + "<br>");


variable=variable+7;

document.write(" <h3>  value after addition is " +" "+ variable +"</h3>" + "<br>");

variable--;

document.write(" <h3> Value after decrement is  " +" "+ variable +"</h3>" + "<br>");

variable=variable%3;


document.write(" <h3> The remainder is  " +" "+ variable +"</h3>" + "<br>");




// task number 4 


var ticketPrice="600";
var total= ticketPrice*5;

document.write(" <h3> The  cost to buy 5 tickets  to a movie is " +" "+ total+"PKR" +"<br>" +"<br>" +"<br>");






//task number 5 


document.write("2" + "x" +"1" + "=" + 2*1 + "<br>");
document.write("2" + "x" +"2" + "=" + 2*2 + "<br>");
document.write("2" + "x" +"3" + "=" + 2*3 + "<br>");
document.write("2" + "x" +"4" + "=" + 2*4 + "<br>");
document.write("2" + "x" +"5" + "=" + 2*5 + "<br>");
document.write("2" + "x" +"6" + "=" + 2*6 + "<br>");
document.write("2" + "x" +"7" + "=" + 2*7 + "<br>");
document.write("2" + "x" +"8" + "=" + 2*8 + "<br>");
document.write("2" + "x" +"9" + "=" + 2*9 + "<br>");
document.write("2" + "x" +"10" + "=" + 2*10 + "<br>" +"<br>");



//task number 6

 var celcius;

 var fahrenheit=70;

 celcius=( 70- 32) * 5/9;

 document.write( "The " +" "+ fahrenheit+"F" +" " +"is " +celcius+"c" +"<br>");


 celcius=25;

 fahrenheit=0;

 fahrenheit=( celcius*9/5) +32;

 document.write( "The " +" "+ celcius+"C" +" " +"is " +fahrenheit+"F" +"<br>"+"<br>");


 var item1Price=650;
 var item2Price=100;
 var item1Quantity=3;
 var item2Quantity=7;
 var shippingCharges=100;
 var totalCost;

 totalCost=(item1Price*item1Quantity)+(item2Price*item2Quantity)+shippingCharges;

 document.write("<h3> Price of item 1 is " + " "+ item1Price +"<br>");


 
 document.write("<h3> Quantity  of item 1 is " + " "+ item1Quantity +"<br>" +"</h3>");
 
 document.write("<h3> Price of item 2 is " + " "+ item2Price +"<br>"  +"</h3>");

 
 document.write("<h3> Quantity of item 2 is  " + " "+ item2Quantity +"<br>"  +"</h3>");

 
 document.write("<h3> Shipping charges  " + " "+shippingCharges+"<br>" +"<br>"  +"</h3>");



 
 document.write("<h3> Total cost of your order is  " + " "+ totalCost +"<br>" +"<br>"  +"</h3>");



 //task number 8


 var totalMarks=980;
 var obtainMarks=804;
 var percentage=(obtainMarks/totalMarks)*100;

 document.write("<h1> Marks Sheet " +"<br>" +"<br>" +"<br>" +"</h1>");

 document.write( "<h4> Total marks :" +" "+totalMarks +"</h4>");
 document.write( "<h4> Obtain marks  :" +" "+obtainMarks +"</h4>");
 document.write( "<h4> Total marks :" +" "  +percentage +"</h4>" +"<br>" + "<br>");


 //task number 9 

 var usDollars=10;
 var saudiRiyal=25;
 var conversion ;
  conversion=(10*104.80) +( 25*28);

  document.write("<h1> CURRENCY IN PKR " +"</h1>" +"<br>" + "<br>")

  document.write("Total currency is PKR :" +" "+ conversion +"<br>" +"<br>" );





  //task number 10 


  var arithmatic= (5 + 5 * 10 ) /2;


  //task number 11

  var currentYear=2020;
  var birthYear=1998;
  var age= currentYear-birthYear;

  document.write("<h1> Age Calculator" +"<br>" +"<br>" +"</h1>")

  document.write("current year :" + "" + currentYear +"<br>");
  document.write("birth year :" + "" + birthYear +"<br>");
  document.write("Your Age is  :" + "" + age +"<br>" +"<br>" +"<br>");



  //task number 12


  var radius=20;
  var circumference= 2*3.142*radius;
  var area= 3.142 *( radius*radius);

  document.write( "<h1>" +" The geometrizer" + "</h1>" +"<br>" +"<br>")

  document.write(" Radius of a circle is :" + "" + radius +"<br>");
  document.write(" The circumference is :" + "" + circumference +"<br>");
  document.write(" The Area is  :" + "" + area +"<br>" +" <br>" + "<br>");




  //task number 13


  var favouriteSnack=" Lays French Cheese";
  var currentAge=22;
  var maximumAge=60;
  var estimatedAmount=2;
  var totalRestofLife;

   totalRestofLife=(maximumAge-currentAge)*estimatedAmount;

  

  document.write("<h1>" +"The life time supply calculator " +"</h1>"+ "<br>" +"<br>");

  document.write("favourite snack :" +""+ favouriteSnack + "<br>");
  document.write("Current age :" +""+ currentAge + "<br>");
  document.write("Estimated maximum age :" +""+ maximumAge + "<br>");
  document.write("Amount of snacks per day  :" +""+ estimatedAmount + "<br>");
  document.write("your will need " +" " + totalRestofLife +" "+  favouriteSnack +" " +"to last you until the ripe old age of"+" " +maximumAge);








 




 






