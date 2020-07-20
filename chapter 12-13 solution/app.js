//task number 1


var character=prompt("Enter any character");

if(character>='A' && character<='Z')
{
    alert("You enter upper case character");
}
else if(character>='a'&& character<='z')
{
     alert("you enter lower case character");
}
else{
    alert("your enter character is not an alphabetic charater");
}


//task number 2

var num1=+prompt("enter your number 1");
var num2=+prompt("enter your number 2 ");
if(num1>num2)
{
     alert( num1+ " " + "is greater");
}

else if(num1<num2)
{
     alert( num2 +" " +"is greater ");
}
else{
    alert("both are equal ");
}



//task number 3

var numcheck=+prompt("Enter number to check it is positive negative or zero ");

if(numcheck>0)
{
    alert("number is positive");
}

else if(numcheck<0)
{
     alert("number is negative");
}

else{
    alert("number is zero");
}


// task number 4


var char=prompt("enter a character ");

 var ch=char.toLowerCase();


 



if(ch==='a'|| ch==='e'||ch==='i'||ch==='o'||ch==='u')
{
   
    alert("character is vowel");
}

else
{
    
     alert("character is not vowel");
}




//task number 5


var correctPass="Yasirkhan4922";
var userPass=prompt("Enter your password ");
if(userPass==="")
{
     alert("enter your password");
}
else if(userPass===correctPass)
{
     alert("Correct! The Password your entered matches the original password ");
}

else
{
     alert("incorrect password");
}



//task number 6

var greetings;
var hour =13;
if(hour<18)
{
    greetings="Good Day";
    alert(greetings);
}
else
{
    greetings="good evening";
    alert(greetings);
}

//task number 7


var time=prompt("enter time in 24hr format like 1900");

if(time>="0000" && time<1200)
{
    alert("Good morning ");
}

else if(time>=1200 && time<1700)
{
    alert("Good afternoon ");
}
else if(time>=1700 && time<2100)
{
     alert("Good evening");
}

else if(time>=2100 && time<2359)
{
    alert("good night");
}

