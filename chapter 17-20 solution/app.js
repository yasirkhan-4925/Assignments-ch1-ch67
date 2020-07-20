//task number 1


var arrOfarray=[ [] ,[],[]];

//task number 2 

var multiArray=[

                   [0,1,2,3],

                   [1,0,1,2],

                   [2,1,0,1]




                ]

                document.write(multiArray[0][0] + " "+ multiArray[0][1] + " " + multiArray[0][2] + " " + multiArray[0][3] + "<br>");
                document.write(multiArray[1][0] + " "+ multiArray[1][1] + " " + multiArray[1][2] + " " + multiArray[1][3] + "<br>");
                document.write(multiArray[2][0] + " "+ multiArray[2][1] + " " + multiArray[2][2] + " " + multiArray[2][3] + "<br>" + "<br>");


                // task nummber 3


                var i=1;

                for(i;i<=10;i++)
                {
                     document.write(i + "<br>" + "<br>"); 
                }



                //task number 4


                var tableNumber=+prompt("Enter a number to show its multiplication table ");
                var tableLength=+prompt("Enter table lenght");

                var i=1;


                for(i;i<=tableLength;i++)
                {
                     document.write( tableNumber + "x" +  i  + "=" + tableNumber*i + "<br>" + "<br>");
                }




                //task number 5

                var fruits=["apple" ,"banana","mango","orange","strawberry"]

                 for(i=0;i<=fruits.length-1;i++)
                 {
                      document.write(fruits[i] + "<br>");

                      
                 }

                 for(i=0;i<=fruits.length-1;i++)
                 {
                    document.write("Element at index " + " "+ i + " " + "is" +" "+ fruits[i] + "<br>");
                 }

                 document.write("<br>" + "<br>");


      //task number 6
      
      

         var i=1;


         document.write("<h1>" + " Counting " + "</h1>" + "<br>");
         for(i=1;i<=15;i++)
         {
              document.write(i + ",");
         }

         document.write("<h1>" + "Reverse Counting" + "</h1>" + "<br>");


         for(i=10; i>=1;i--)
         {
              document.write(i +",");
         }


         document.write("<h1>" + "Even Number" + "</h1>" + "<br>");


         for(i=2;i<=20;i=i+2)
         {
              document.write(i + ",");
         }


         document.write("<h1>" + "Odd Number" + "</h1>" + "<br>");

         for(i=1;i<=20;i=i+2)
         {
              document.write(i + ",");
         }


         document.write("<h1>" + "Series" + "</h1>" + "<br>");


         for(i=1;i<=10;i++)
         {
              document.write(2*i +"k"+","+" ");
         }


         document.write("<br>" + "<br>");


          var A=["cake","apple pie","cookie","chips","patties"];

          var userInput=prompt("Enter your item to search");

          var conv= userInput.toLowerCase();

          var check;

          for(i=0;i<=A.length-1;i++)
          {
               if(conv===A[i])
               {
                 

                    check=1;
                    break;
                    
               } 
               else
               {
                
                check=0;
               }
          }

          if(check===1)
          {
                  document.write( "<h3>" +conv + " "+ "is available at  index" + " " + i+ " "+ "in our bakery " +"</h3>");
          }
          else
          {
                 document.write("We are sorry " + " "+ conv + " " + "is not available in our bakery");

          }




          document.write("<br>" + "<br>");

          var largestNum=[24,53,78,91,12];

          var max;
          max=largestNum[0];

          for(i=1;i<=largestNum.length-1;i++)
          {
               if(max<largestNum[i])
               {
                    max=largestNum[i]
               }
          }

          document.write("Array items :" + " ");
          for(i=0;i<=largestNum.length-1;i++)
          {
               document.write(largestNum[i] + " ," + " ");
          }


          document.write("<br>");

          document.write("The largest number is " + " " + max + "<br>" + "<br>");


          //task number 9 

          var smallestNum=[24,53,78,91,12];
          var min;

          min=smallestNum[0];

          for(i=1;i<=smallestNum.length-1;i++)
          {
               if( min>smallestNum[i])
               {
                   min=smallestNum[i];
               }
                
          }

          
          document.write("Array items :" + " ");
          for(i=0;i<=smallestNum.length-1;i++)
          {
               document.write(smallestNum[i] + " ," + " ");
          }


          document.write("<br>");

          document.write("The smallest  number is " + " " + min+ "<br>" + "<br>");



          //task number 10 ;


          for(i=5;i<=100;i=i+5)
          {
                 document.write(i+ "," + "");
          }



 













