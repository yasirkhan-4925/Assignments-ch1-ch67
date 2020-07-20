//question no 1

 var d=document.getElementById("main-content");


 //question no 2

 var d = document.getElementById('main-content');
 d.childNodes;
 console.log(d);

 //question no3

 var r = document.getElementsByClassName('render');

 console.log(r);

 //question no 4

 document.getElementById("first-name").value = "yasir";


 //question no 5

 document.getElementById("lastName").value="khan"

 document.getElementById("email").value="example@.com"


 //question 2 part 1

 var x = document.getElementById("form-content").nodeType;
console.log(x);


//quesiotn 2


var x = document.getElementById("lastName");
x.nodeType;
x.childNodes;
console.log(x)


var a = document.getElementById('main-content').firstChild;
var b = document.getElementById('main-content').lastChild;
console.log(a,b);



var l = document.getElementById('lastName').previousSibling;
var m = document.getElementById('lastName').nextSibling;
console.log(l,m);



var e = document.getElementById('email');
e.parentNode;
s = e.nodeType;
console.log(e,s);
