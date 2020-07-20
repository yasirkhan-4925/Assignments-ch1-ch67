//task number 1


var studentName=[];

//task number 2

var student = new Array();

// task number 3


var stringArray= ["yasir " ,"sameer " ,"wasi "];

//task number 4


var numberArray=[ 1,2,3,4,5];

//task number 5


var booleanArray=[ true,false,true];



//task number 6


var mixedArray=["yasir" ,1,4,6,"sameer",false];



//task number 7

var qualification=["SSC","HSC","BCS","BS","BCOM","MS","M.phill","phD"];

document.write("<h1>" +" qualifications" +"</h1>" +"<br>"+"<br>" +"<br>");

document.write("1)"+ qualification[0] +"<br>");
document.write("2)"+ qualification[1] +"<br>");
document.write("3)"+ qualification[2] +"<br>");
document.write("4)"+ qualification[3] + "<br>");
document.write("5)"+ qualification[4] +"<br>");
document.write("6)"+ qualification[5] +"<br>");
document.write("7)"+ qualification[6] +"<br>");
document.write("8)"+ qualification[7] + "<br>" + "<br>" );


//task number 8

var studentName=["yasir " ,"sameer","wasi "];
var studentMarks=[320,230,480];
// var student1percentage= (studentMarks[0]/500)*100;
// var student2percentage= (studentMarks[1]/500)*100;
// var student3percentage= (studentMarks[2]/500)*100;

var percentage=[(studentMarks[0]/500)*100,(studentMarks[1]/500)*100,(studentMarks[2]/500)*100]


document.write("score of " +" "+ studentName[0] + " " + "is " +" "+ studentMarks[0] + "." +"percentage :" + percentage[0]+"%" +"<br>");

document.write("score of " +" "+ studentName[1] + " " + "is " +" "+ studentMarks[1] + "." +"percentage :" + percentage[1]+"%" +"<br>");
document.write("score of " +" "+ studentName[2] + " " + "is " +" "+ studentMarks[2] + "." +"percentage :" + percentage[2]+"%" +"<br>" +"<br>" +"<br>");




var colors=["red" ,"yellow" ,"green"];

document.write(colors[0] + "<br>" +colors[1]+"<br>" +colors[2] +"<br>"+"<br>" +"<br>");

var userChoice=prompt("which colors do you want to add to the beginning of the array ?");

colors.unshift(userChoice);

document.write("updated list of array  adding new element a the beginning" +"<br>" +"<br>")

document.write(colors[0] + "<br>" +colors[1]+"<br>" +colors[2] +"<br>" +colors[3] +"<br>" +"<br>");


var userChoice=prompt("which colors do you want to add to the  end of the array ?");

colors.push(userChoice);

document.write("updated list of array adding new element at the end " +"<br>" +"<br>");

document.write(colors[0] + "<br>" +colors[1]+"<br>" +colors[2] +"<br>" +colors[3] +"<br>" + colors[4] +"<br>" +"<br>");


colors.unshift("orange","light grey");

document.write("updated list of array adding two new element at the beginning  "+"<br>" +"<br>");

document.write(colors[0] + "<br>" +colors[1]+"<br>" +colors[2] +"<br>" +colors[3] +"<br>" + colors[4] + "<br>" +colors[5] + "<br>" + colors[6] + "<br>" +"<br>");




colors.shift();
document.write("updated list of array  after delete element from the beggining"+"<br>" +"<br>");


document.write(colors[0] + "<br>" +colors[1]+"<br>" +colors[2] +"<br>" +colors[3] +"<br>" + colors[4] + "<br>" +colors[5] + "<br>" +  "<br>" +"<br>");



colors.pop();

document.write("updated list of array  after delete element from the last"+"<br>" +"<br>");

document.write(colors[0] + "<br>" +colors[1]+"<br>" +colors[2] +"<br>" +colors[3] +"<br>" + colors[4] + "<br>"  + "<br>" +  "<br>" +"<br>");




var userChoice=+prompt("At which index he or she want to add a color ??");

var color=prompt(" which color do you want to add on your desired index");


colors.splice(userChoice,0,color);

document.write("updated list of array  after taking user desired index and color"+"<br>" +"<br>");

document.write(colors[0] + "<br>" +colors[1]+"<br>" +colors[2] +"<br>" +colors[3] +"<br>" + colors[4] + "<br>" + colors[5] +"<br>"  + "<br>" +  "<br>" +"<br>");


var userChoice=+prompt("At which index you want to delete color ");
var delAmount=+prompt("How many colors you want to del ");

colors.splice(userChoice,delAmount);

document.write("updated list of array  after asking the user  from where he want to delete and how many he want to del "+"<br>" +"<br>");

document.write(colors[0] + "<br>" +colors[1]+"<br>" +colors[2] +"<br>" +colors[3] +"<br>" + colors[4] + "<br>" + colors[5] +"<br>"  + "<br>" +  "<br>" +"<br>");



//task number 10 


var studentScore=[320,230,480,120];



document.write( "Scores of student :" +studentScore[0] +","+ studentScore[1] +","+ studentScore[2]+"," +studentScore[3] + "<br>" +"<br>");


studentScore.sort();

document.write( " Ordered score of students :" +studentScore[0] +","+ studentScore[1] +","+ studentScore[2]+"," +studentScore[3] + "<br>" +"<br>");


//task number 11


var cities=["karachi" , "lahore" ,"islamabad " ,"quetta " ,"peshawar"];

var selectedcities=cities.slice(2,4);

document.write("<h1>" + "cities list " +"</h1>" +"<br>"); 

document.write(cities[0] + " " + cities[1] + " " + cities[2] + " " + cities[3] + " " + cities[4] + "<br>" + "<br>" );


document.write("<h1>" + "Selected Cities List" +"</h1>" +"<br>"); 
document.write(selectedcities[0] + " " + selectedcities[1]  +"<br>"  + "<br>");



var arr=["This" ,"is" ,"my","cat"];



document.write( "<h1>" + "Array:" + "</h1>" + "<br>" + arr + "<br>" + "<br>");

 var join=arr.join(' ');

 

document.write( "<h1>" + "String" + "</h1>" + "<br>" + join +"<br>" + "<br>" + "<br>");




//task number 13


var computer=[];
computer.push("keyboard");
computer.push("mouse");
computer.push("printer");
computer.push("monitor");

 


 document.write( "<h1>" +"Devices" + "</h1>"+ "<br>" + computer + "<br>" );


//  document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer[0]);
//  document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer[1]);
//  document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer[2]);
//  document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer[3] + "<br>" + "<br>");

document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer.shift() );
document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer.shift() );
document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer.shift() );
document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer.shift() );




 //task number 14

 var computer=["keyboard" , "mouse" ,"printer" ,"monitor"];


 document.write( "<h1>" +"Devices" + "</h1>"+ "<br>" + computer + "<br>" );
 

//  var p=computer.pop();
 document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer.pop() );
 document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer.pop() );
 document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer.pop() );
 document.write( "<h1>" +"out:" + "</h1>" + "<br>" + computer.pop() +"<br>" + "<br>"  );


 




 //task number 15


var phoneManufacturers=["Apple" , "Samsung" , "Motorolla", "Nokia","Sony","Haier"];
document.write("<select>");


document.write("<option>" + phoneManufacturers[0]  +"</option>");
document.write("<option>" + phoneManufacturers[1]  +"</option>");
document.write("<option>" + phoneManufacturers[2]  +"</option>");

document.write("<option>" + phoneManufacturers[3]  +"</option>");
document.write("<option>" + phoneManufacturers[4]  +"</option>");
document.write("<option>" + phoneManufacturers[5]  +"</option>");


document.write("</select>");















 


































