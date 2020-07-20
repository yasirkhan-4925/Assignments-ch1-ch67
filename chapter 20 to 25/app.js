function taskno(tasknumber){


    document.write( "<h1>" + tasknumber+"</h1>" + "<br>" + "<br>" );

}

function linebreak(){
    document.write("<br>" + "<br>");
}


//task number 1

taskno(" Solution no 1");


 var firstName=prompt("Enter your first name ");
 var secondName=prompt("Enter your second name ");


 var fullName= firstName+ " "+ secondName;

 

  document.write( "Hello " + " " +  fullName);


  linebreak();


  //task number 2



  taskno("Solution no 2");

  var favPhone=prompt("Enter your favourite mobile phone model: ");



  document.write("My fav phone is :" + " " + favPhone + "<br>");


  document.write("length of string is :" + " "+ favPhone.length);


  //task number 3


  taskno("Solution no 3");


  var name="Pakistani"

  document.write("String: " + " " + name + "<br>");

  var indx=name.indexOf("n");

  document.write("Index of 'n' :" + " "+ indx);


  //task number 4



  taskno("Solution no 4");

  var word="Hello World";

  document.write("String:" + " "+ word + "<br>");

  var lastindx=word.lastIndexOf("l");

  document.write("last index of 'l':" + " "+ lastindx);


  //task number 5


  taskno("Solution no 5");


  var word="Pakistani";
   var charAt3= word.charAt(3);
   document.write("String" + " " + word + "<br>");

   document.write("Character at index 3:" +  " " +  charAt3  );

   //task no  6

   taskno("Solution no 6");

   var firstName=prompt("Enter your first name ");
 var secondName=prompt("Enter your second name ");


 var fullName= firstName.concat(secondName);

 

  document.write( "Hello " + " " +  fullName);


//task no 7


taskno("Solution no 7");

var city="Hyderabad";
var replc=city.replace("Hyder","Islam");
document.write("city:" + " " + city + "<br>");
document.write("After Replacement:" + " "+ replc);


//task no 8

taskno("Solution no 8");

var message="Ali and Sami are best friends. They play cricket and football together.";

var rplc=message.replace(/and/g,"&&");

document.write("Before replacement:" + " "+ message+ "<br>");

document.write("After replacement:" + " " + rplc );


//task no 9 

taskno("Solution no 9")

var num="472";
var afterConv=parseInt(num);

document.write("Value:" +" " + num + "<br>");
document.write("Type : String" + "<br>");

document.write("value:" + " " + afterConv + "<br>");

document.write("Type : Number");

//tasknumber 10


taskno("Solution no 10");

var userInput=prompt("Enter your input");

document.write("User Input:" + " " + userInput + "<br>");

document.write( "Upper case:" + " " + userInput.toUpperCase());

//task number 11


taskno("Solution no 11");

var userInput=prompt("Enter your input to convert it into title case");

var firstWord=userInput.slice(0,1);
var lastWord=userInput.slice(1);
var firstWord=firstWord.toUpperCase();
var titleCase=firstWord+lastWord;
document.write("User Input:" + " " + userInput + "<br>");
document.write( "Title case:" + " " + titleCase);


//task number 12 

taskno("Solution no 12");

var num=35.36;
document.write("Number:" + " " + num + "<br>");

var convr=num.toString();
convr=convr.replace(".",'');

document.write("Result:" + " " + convr);



//task number 13


taskno("Solution no 13");

var userName=prompt("Enter your user name ");
var i;

for(i=0;i<userName.length;i++)
{
    if(  userName.slice(i,i+1)==="!" ||  userName.slice(i,i+1)==="," || userName.slice(i,i+1)==="." || userName.slice(i,i+1)==="@" )
    {
        alert("enter valid user name ");
        
        break;
        
    }

    
    
  
}

document.write("check by entering symbol in username prompts to see working or not")


//task number 14 

taskno("Solution no 14")

var A=["cake","apple pie","cookie","chips","patties"]

var userInput=prompt("Enter your item to search");

userInput=userInput.toLowerCase();

var found=false;

for(i=0;i<A.length;i++)
{
     if(A[i]===userInput)
     {
          found=true;
          document.write(userInput + " " + "is available at index " + " " + i + "in our bakery " )
          break;
     }
     
}

if(found!==true)
{
     document.write("we are sorry " + " "+ userInput + " " + " is not available in our bakery " );
}


//task number 15


taskno("Solution no 15")



var pass=prompt("enter your password");
var letterNumber= /^[0-9a-zA-Z]+$/;

document.write("Entered Password:" + " " + pass + " <br>");
if(!(pass.match(letterNumber)))
{
     document.write("Password should be alphanumeric" + "<br>")

     val=false
}
 else if(pass.length>6)
{
    document.write("Password should not be more than 6 digits" + " <br>")
      var val=false
}
else if(pass.charAt(0)>=48 ||pass.charAt(0)<=57)
{
      document.write("Password should not be started with a number" + "<br>");
      val=false
}
else{


     document.write("Password is valid")



}




if(val===false)
{
      document.write("please enter a valid password");
}



//task number 16


taskno("Solution no 16");

var university="University of Karachi";

var Res=university.split('');



for(i=0;i<Res.length;i++)
{
     document.write(Res[i]+ "<br>");
}

//task number 17


taskno("Solution no 17");


var userInput=prompt("Enter your string");
var res;

for(i=0;i<userInput.length;i++)
{
   res=userInput.slice(i,i+1);
}

document.write("User input:" + " " + userInput + "<br>");

document.write("last char of input:" + " " + res);


//task number 18


taskno("Solution no 18 ");

var text="The quick brown fox jumps over the lazy dog ";
document.write("Text" + " "+ text + "<br>");

text=text.toLowerCase();

var counter=0;

for(i=0;i<text.length;i++)
{
     if(text.slice(i,i+3)==="the")
     {
          counter++;
     }
}

document.write("There are" + " " + counter + " " + "occurenc(s) if the word 'the '")








 










 













  






  











