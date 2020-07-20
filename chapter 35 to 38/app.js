function taskno(tasknumber)
{
     document.write("<h1>" + tasknumber + "</h1>" + "<br>" + "<br>");
}





//task number 1

taskno("Solution no 1");

function currentDate()
{
     var d=new Date();
     document.write(d);
}

currentDate();


//task number 2

taskno("Solution no 2")

function greetUser(firstname,lastname)
{
     document.write("Hello" + " " + firstname + " " + lastname + ""); 
}

greetUser("yasir","khan");


//task number 3

taskno("Solution no 3");

function add()
{
      var num1=+prompt("Enter number 1");
     var num2=+prompt("Enter number 2");

     return num1+num2;

}

 document.write( "Sum  of two number is " + " " + add());



 //task number 4

 taskno("Solution no 4")

 function calc(num1,operator,num2){

    var total;
            
    if(operator==="+")
    {
         total=num1+num2;
         return total;
    }
    else if( operator==="-")
    {

    total=num1-num2;
         return total;

 } 

    else if(operator==="*")
 {
    total=num1*num2;
    return total;

 }
 else if(operator==="/")
 {
    total=num1/num2;
    return total;
 }

}


var result=calc(12,"+",2);

document.write("Result is " + " "+ result);


//task number 5

taskno("Solution no 5");

function itsSquare(arg)
{
     return arg*arg;
}


 document.write( "Sqaure of num is" + " " +itsSquare(8));


 //task number 6

 taskno("Solution no 6");

 function factorial(num){
     var answer = 1;
    if (num == 0 || num == 1){
      return answer;
    }else{
      for(var i = num; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  

  var num=3;
  var factAns=document.write("Factorial of " + num + " " + "is " + factorial(num));



  //task no 7

  taskno("Solution no 7");

  function startEnd(start,end)
  {
      var i;

      for(i=start;i<=end;i++)
      {
          document.write(i + " " + "<br>");
      }
  }

  startEnd(1,15);


  //task number 8

  taskno("Solution no 8");



function hypo(base,perpendicular)
{
     function square (sq)
     {
         return sq*sq;
     }

     return Math.sqrt(square(base) + square(perpendicular))
}

var a=hypo(2,8);

document.write("hypotenus is " + " " + a);


//task no 9 

taskno("Solution no 9")

function area(width,height)
{
     return width*height;
}

 document.write(" Argument as value : " + " " + area(2,3) + "<br>" );

 var width=2;
 var height=2;

  var total =document.write("Argument as variable : " + " "+ area(width,height));


//   task number 10

  taskno("Solution no 10 ");


// var word="civic";
var check="";



function palindrome(word)
{
     
     for(var i=word.length-1;i>=0;i--)
     {
              check+=word[i];
     }
     if(word===check)
     {
        document.write("Word is palindrome");
     }

     else{
          document.write("word is not palindrome")
          
     }
}

palindrome("civic");


// task number 11

taskno("Solution no 11");




function capital(word) 
{
    word = word.split(" ");

    for (var i = 0, x = word.length; i < x; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].substr(1);
    }

    return word.join(" ");
}


document.write( capital("my name is muhammad yasir khan"));


//task no 12

taskno("Solution no 12");


function findlongest(word)
{
  var array1 = word.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(findlongest("Web development tutorial"));


//task no 13

taskno("Solution no 13");





function charcount(str, letter) 
{
 var Count = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      Count += 1;
      }
  }
  return Count;
}

document.write(charcount("jsresources.com","o"));


//task  number 14

taskno("Solution no 14");


function calcCircumference(radius)
{
     return 2*(3.142)*radius
}

var radius =3;

var answer=calcCircumference(radius)
document.write("The circumference is :" + " " + answer + "<br>");


function calcArea(radius)
{
     return 3.142*(radius*radius);
}

answer=calcArea(radius);
document.write("The ares is " + " "+ answer);


//task no 15

taskno("Solution no 15");







 





