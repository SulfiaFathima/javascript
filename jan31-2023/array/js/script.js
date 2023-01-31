const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Array elements: ",fruits);
let fruit = fruits[0];
console.log("First Array element: ",fruit);
let lastfruit = fruits[fruits.length-1];
console.log("Last Array Element:" ,lastfruit);
let text= "";
for(i=0;i<fruits.length;i++){
text += fruits[i];
}
console.log(text);
fruits.push("Guava");
console.log(fruits);
fruits.push("litchi","strawberry");
console.log("push",fruits);
fruits.pop();
console.log("pop",fruits);
fruits.shift();
console.log("shift",fruits);
fruits.unshift("jackfruit");
console.log("unshift",fruits);
fruits.splice(1,4);
console.log("splice",fruits);
console.log(Array.isArray(fruits));
var fruitsarr = fruits.toString();
console.log(fruitsarr);
console.log(fruits.join("|"));
console.log("fruits length: ",fruits.length);
delete fruits[1];
console.log(fruits);
var vegetables = ["tomato","potato","brinjal","drumstick"];
console.log("Concat Fruits and Vegetables: ",fruits.concat(vegetables));
var sliceveg = vegetables.slice(2);
console.log(sliceveg);
console.log(vegetables);
var sortedveg = vegetables.sort();
console.log("Sorting",sortedveg);
console.log("Reverse", vegetables.reverse());
var arraynumber = [100,01,56,98,12,5];
var sorting = arraynumber.sort(function(a,b){return a-b});
console.log("sorting Numbers:",sorting);
console.log("Descending: ",sorting.reverse());
function arrayMax(arr) {
    return Math.max.apply(null, arr);
  }
  console.log("Highest Number: ",arrayMax(arraynumber));
function arrayMin(arr) {
    return Math.min.apply(null, arr)
}
console.log("Lowest Number: ",arrayMin(arraynumber));

//for each

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = "For Each: "+txt;

function myFunction(value) {
  txt += value + "<br>"; 
}
//map
let txt1 = "";
numbers.map(mapfunction);
document.getElementById("map").innerHTML = "map" + txt1;
function mapfunction(value) {
    txt1 += value *2 + "<br>"; 
  }
  

//filter
  let txt2 = "";
  var over18 = numbers.filter(filtrfn);
  document.getElementById("filter").innerHTML = "filter:" + over18;
  function filtrfn(value) {
    return value > 20 ; 
  }
 
  //reduce
  var sum = numbers.reduce(addfn);
function addfn(total, value){
    return total + value;
}
document.getElementById("add").innerHTML = "reduce:" + sum;

//every
var every = numbers.every(checkfn);
function checkfn(value){
    return value > 20 ; 
}
document.getElementById("check").innerHTML = "Every:" + every;
 
//some
var some = numbers.some(checkfunction);
function checkfunction(value){
    return value > 20 ; 
}
document.getElementById("some").innerHTML = "some:" + some;

//find
var findfn = numbers.find(findfunction);
function findfunction(value) {
    return value > 20;
}
document.getElementById("find").innerHTML = "Find:" +findfn;
console.log("banana: ",fruits.includes("banana"));