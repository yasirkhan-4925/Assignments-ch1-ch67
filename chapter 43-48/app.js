function taskno(tasknumber) {
  document.write("<h1>" + tasknumber + " " + "</h1>" + "<br>");
}
// task no 1

function clalert() {
  alert("hello");
}

//task no 2
function purchase() {
  alert("Thanks for purchasing phone from us ");
}

//taskno 3

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(i);
}

//task no4

function change(id, src) {
  var image = document.getElementById(id);
  image.src = src;
}
//task no 5
var counter=0;
var cnt=document.getElementById("counter");

function counterincrease(){ 
    
    counter++;
    cnt.innerHTML=counter.toString();
    

    
}

function counterdecrease()
{
     counter--;
     cnt.innerHTML=counter.toString();
}
