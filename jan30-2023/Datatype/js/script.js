let length=16;
   let width = 12.5;
   console.log("Numbers "+length);
   console.log("Numbers "+width);
   console.log( "Number "+typeof length);
    let color="pink ";
    console.log(color + typeof color);
    let x= true;
    let y= false;
    console.log(x + typeof x);
    const object= {
        firstname:"Sulfia",
        lastname: "fathima",
        age:15
    }
    console.log(object);
    console.log("Name:"+object.firstname);
    const arr=["pink","white","black"];
    console.log("value 1: "+arr[0]);
    const date=new Date;
    console.log("Date:"+date);
let num = "hai"+10+5;
let num2 = 10+5+"hai";
console.log("hai+10+5: "+ num);
console.log("10+5+hai: " +num2);

let string1;
string1=5;
string1 = "Ram";
console.log(string1);
let a=10;
let b=5;
let c=5;
console.log(a==b);
console.log(b==c);
let number;
console.log(typeof number);
let number1="";
console.log(typeof number1);

var x1 = 5;
var y1 = 6;
var z1 = x1 + y1;
console.log(z1)

let x2 = 5;
let y2 = 6;
let z2 = x2 + y2;
console.log(z2);

x3=5;
y3=6;
console.log(x3+y3);

const price1 = 50;
const price2 = 6;
let total = price1 + price2;
console.log(total);

let person="Karthik" , age=20, gender="male";
 console.log(person, age, gender);

 var m=10;
 console.log(m);  

 {
    var m=2;
  console.log(m);  
 }
 console.log(m);  
  let n=1;
  console.log(n);  

  {
    let n=2;
    console.log(n);  

  }
  {
    let n=3;
    console.log(n);  

  }
  console.log(n);  

let color1 = "Red";


const color2 = "grey";
console.log(color2);
 
const arr2= ["apple","orange","banana"];
console.log("before change", arr2);

arr2[1]="litchi";
console.log(arr2);

const object2 = {
    firstname: "Ram",
    lastname: "kumar",
    age: 25
}
console.log("before change", object2);

object2.age="45";
console.log(object2);

const time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
 console.log(time);
  console.log(greeting);


let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);

  var text="";
  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
  
document .getElementById("demo").innerHTML=text;
 var i=0, text1= "";
do {
    text1 += "The number is " + i + " \n";
    i++;
  }
  while (i < 10);
  console.log(text1);

  var text2 = "",j=1;
  while (j < 10) {
    text2 += "The number is " + j +"\n";
    j++;
  }
  console.log(text2);

  const person1 = {fname:"aslam ", lname:"mohamed", age:25};
  let ans="";
  for(let x in person1){
    ans+= person1[x];
  }
  console.log(ans);

  const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let a in numbers) {
  txt += numbers[a];
}
console.log(txt);

let txt2 = "";
for (let a in numbers) {
  txt2 += numbers[a] + "\n";
}
console.log(txt2);

const name1= "goodmorning";
let letter="";
for(const x of name1){
    letter += x +"\n";
}
    console.log(letter);

    const name2= ["goodmorning", "goodevening","good night"];
let letter1="";
for(const x of name2){
    letter1 += x +"\n";
}
    console.log(letter1);
