function taskno(tasknumber) {
  document.write("<h1>" + tasknumber + "</h1>" + "<br>");
}
// task number 1
taskno("Solution no 1");

function power(a, b) {
  var num = a;
  for (i = 1; i < b; i++) {
    num = num * a;
  }
  return num;
}

var rTopow = power(2, 4);
document.write("The power is :" + " " + rTopow);

//task number 2

taskno("Solution no 2");

function leapyear(year) {
  var i = 0;
  if ((year % 4 && year % 100 && year % 400) == 0) {
    i = 1;
  } else {
    i = 0;
  }
  return i;
}
var leap;
var year = +prompt("Enter Year To Check is Leap Year");
leap = leapyear(year);
if (leap == 1) {
  document.write("input is leap year");
} else {
  document.write("input is not leap year");
}

// task number 3
taskno("Solution no 3");

function halfarea(a, b, c) {
  var num = (a + b + c) / 2;
}
function area(i, j, k) {
  sum = (i + j + k) / 2;
  var total = sum * ((sum - i) * (sum - j) * (sum - k));
  var area = Math.sqrt(total);
  area = area.toFixed(2);
  document.write("Full Area Of Triangle Is " + area);
}

area(7, 9, 10);

// task number 4

taskno("Solution no 4");

function average(grade) {
  if (grade >= 80) {
    document.write("Average is A+");
  } else if (grade < 80 && grade >= 70) {
    document.write("Average is A");
  } else if (grade < 70 && grade >= 60) {
    document.write("Average is B");
  } else if (grade < 60 && grade >= 50) {
    document.write("Average is c");
  } else if (grade < 50) {
    document.write("Fail");
  }
}
function percentage(per) {
  var percent = (per / 300) * 100;
  return percent;
}
function main() {
  var english = +prompt("Enter English Marks");
  var urdu = +prompt("Enter Urdu Marks");
  var math = +prompt("Enter Math Marks");
  var obatined = english + urdu + math;
  document.write("Obatained Marks Is " + obatined + "<br>");
  document.write("Your Percentage is " + percentage(obatined));
  var ave = percentage(obatined);
  document.write("<br>");
  average(ave);
}

main();

// task number 5

taskno("Solution no 5");

function indxof(word, character) {
  var i = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] == character) return i;
  }
}

document.write(indxof("yasir", "a"));

// task number 6

taskno("Solution no 6");

var name = "Muhammad Yasir Khan ";

function removeVowels(text) {
  if (text.length <= 25) {
    return text.replace(/[aeiou]/gi, "");
  } else {
    alert("string is more than 25 characters");
  }
}

document.write(removeVowels(name));

// solution no 7
taskno("Solution no 7 ");

function findOccurrences() {
  var str = "aa ii oo";
  var count = 0;
  let haveSeenVowel = false;

  for (const letter of str.toLowerCase()) {
    switch (letter) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u": {
        if (haveSeenVowel) {
          count++;
          haveSeenVowel = false;
        } else {
          haveSeenVowel = true;
        }
        break;
      }
      default:
        haveSeenVowel = false;
    }
  }

  return count;
}

document.write(findOccurrences());

// task number 8
taskno("Solution no 8");

var km = +prompt("Write Distance into Kilmoeters to  Convert Into Meters");
function intometers(km) {
  var meters = km * 1000;
  document.write("In Meters " + meters);
}

function intofeet(km) {
  var feet = km * 3280.84;
  document.write(" In Feet " + feet);
}
function intoinches(km) {
  var inches = km * 3280.84;
  document.write(" In Inches " + inches);
}
function intoCM(km) {
  var cm = km * 100000;
  document.write("In Centimeters " + cm);
}

intometers(km);
intofeet(km);
intoinches(km);
intoCM(km);

taskno("Solution no 9");

function employepayment() {
  var hours = prompt("Enter hour to check Your Pay");
  var pay = hours * 12;
  if (hours < 40) {
    document.write("Your work is less than 40 hours " + pay);
  } else {
    document.write("Your Amount is " + pay);
  }
}

taskno("Solution no 10");

var amount = +prompt("Enter your amount to withdraw");
var amount100 = Math.floor(amount / 100);
var amount50 = Math.floor((amount % 100) / 50);
var amount10 = Math.floor(((amount % 100) % 50) / 10);

document.write(
  "you will have" +
    " " +
    amount100 +
    " " +
    "hundred notes" +
    " " +
    amount50 +
    " " +
    " fifty notes" +
    " " +
    amount10 +
    " " +
    "ten notes"
);
