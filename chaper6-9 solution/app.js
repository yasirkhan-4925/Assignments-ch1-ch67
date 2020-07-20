

var a=10 ;
 
document.write("<h1>" +"Result" +"</h1>" + "<br>");
document.write("The value of a is :" + " "+a +"<br>");
document.write("..........................................." +"<br>" );

++a;


document.write("the value of ++a is :" +" "+ a + "<br>");
document.write("now the value of a is :" +" "+a +"<br>"+ "<br>");

 a=11;
 
 

document.write("the value of a++ is :" +" "+ a + "<br>");

a++;
document.write("now the value of a is :" +" "+a +"<br>"+ "<br>");

--a;

document.write("the value of --a is :" +" "+ a + "<br>");
document.write("now the value of a is :" +" "+a +"<br>"+ "<br>");

a--;
a++;


document.write("the value of a-- is :" +" "+ a + "<br>");
a--;


document.write("now the value of a is :" +" "+a +"<br>"+ "<br>" +"<br>" +"<br>");


//task number 2


var a=2,b=1;
var _output= --a - --b + ++b  + b-- ;

    //        1  -  0  +  1   +  1
    //        --a; output 1
    //        --a - --b output 1
    //        --a - --b  + ++b output 2
    //       --a - --b + ++b +b-- output 3


document.write("a is : " + " "+ a +"<br>");
document.write("b is :" +" "+ b +"<br>");
document.write("result is :" +" "+ _output +"<br>" + "<br>" +"<br>");



//task number 3


var name= prompt("Enter you name " );
 alert(name +  " " +"welcome to my website"  );


 //task number 5

   
   
   


   var table= prompt("enter table number");

   if(table!=="")
   {

   

    document.write( table +"x"+"1"+"="+table*1 +"<br>");
    document.write( table +"x"+"2"+"="+table*2 +"<br>");
    document.write( table +"x"+"3"+"="+table*3 +"<br>");
    document.write( table +"x"+"4"+"="+table*4 +"<br>");
    document.write( table +"x"+"5"+"="+table*5 +"<br>");
    document.write( table +"x"+"6"+"="+table*6 +"<br>");
    document.write( table +"x"+"7"+"="+table*7 +"<br>");
    document.write( table +"x"+"8"+"="+table*8 +"<br>");
    document.write( table +"x"+"9"+"="+table*9 +"<br>");
    document.write( table +"x"+"10"+"="+table*10 +"<br>");
  

   }

   else{

    document.write( 5 +"x"+"1"+"="+5*1 +"<br>");
    document.write( 5 +"x"+"2"+"="+5*2 +"<br>");
    document.write( 5 +"x"+"3"+"="+5*3 +"<br>");
    document.write( 5 +"x"+"4"+"="+5*4 +"<br>");
    document.write( 5 +"x"+"5"+"="+5*5 +"<br>");
    document.write( 5+"x"+"6"+"="+5*6 +"<br>");
    document.write( 5+"x"+"7"+"="+5*7 +"<br>");
    document.write( 5 +"x"+"8"+"="+5*8 +"<br>");
    document.write( 5 +"x"+"9"+"="+5*9 +"<br>");
    document.write( 5 +"x"+"10"+"="+5*10 +"<br>" +"<br>" +"<br>");

   


 
   }


   // task number 6


   var subject1=prompt("Enter your subject one");
   var subject2=prompt("Enter your subject two ");
   var subject3=prompt("Enter your subject three");

 

   var fullMarks=100;

   var obtain1=+prompt("Enter your marks in  subject one");
   var obtain2=+prompt("Enter your marks in  subject two ");
   var obtain3=+prompt("Enter your marks in subject three");

   var subject1Percentage=(obtain1/fullMarks)*100;
   var subject2Percentage=(obtain2/fullMarks)*100;
   var subject3Percentage=(obtain3/fullMarks)*100;

   var totalMarks=obtain1+obtain2+obtain3;
   var percentage=(subject1Percentage+subject2Percentage+subject3Percentage)/3;


   document.write("<table border=1>");

   document.write("<tr>" + "<th>" + "Subjects"  + "</th>"   + "<th>" + "Total Marks"  + "</th>"   + "<th>" + "Obtain Marks"  + "</th>"  + "<th>" + "Percentage"  + "</th>"                           +"</tr>");

   document.write("<tr>" + "<td>" + subject1  + "</td>"   + "<td>" + fullMarks + "</td>"   + "<td>" + obtain1  + "</td>"  + "<td>" + subject1Percentage +"%"  + "</td>"                           +"</tr>");

   document.write("<tr>" + "<td>" + subject2  + "</td>"   + "<td>" + fullMarks + "</td>"   + "<td>" + obtain2  + "</td>"  + "<td>" + subject2Percentage +"%"  + "</td>"                           +"</tr>");

   document.write("<tr>" + "<td>" + subject3  + "</td>"   + "<td>" + fullMarks + "</td>"   + "<td>" + obtain3  + "</td>"  + "<td>" + subject3Percentage +"%"  + "</td>"                           +"</tr>");

   document.write("<tr>" + "<th>" + "" + "</th>"   + "<th>" + 300+ "</th>"   + "<th>" + totalMarks  + "</th>"  + "<th>" + percentage+"%" + "</th>"                           +"</tr>");




   document.write("</table>");



   







