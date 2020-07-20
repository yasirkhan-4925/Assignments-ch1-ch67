function submits(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var num = document.getElementById('num').value;
    var pass = document.getElementById('pass').value;
  
    document.getElementById('form_data').innerHTML='Name: ' + name +
    '<br> Email: ' + email + '<br> Phone: ' + num + '<br> Password: ' + pass;
  }

 function readmore()
 {
      var fullText="this item is very good it has many reasons to buy and full fill your needs"
      var targetPara=document.getElementById("itemdetails");
      targetPara.innerHTML=fullText;
 }

 function addtotable()
 {
       var name=document.getElementById("name").value;
       var phone=document.getElementById("phonenum").value;
       var ordernum=document.getElementById("ordernum").value;
       var mytable=document.getElementById("myTable1");
       var row=mytable.insertRow(2);
       row.innerHTML=' <td>'+ name +'</td>'+ 
       '<td>'+ phone +'</td>'+'<td>'+ ordernum+'</td> ' + 
       "<td><input type='button' value='Delete' onclick='delete_row()'></td>";
       

 }

 function delete_row(){
     var td = event.target.parentNode; 
     var tr = td.parentNode; 
     tr.parentNode.removeChild(tr);
   }