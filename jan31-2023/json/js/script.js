const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;


const arr = ["John", "Peter", "Sally", "Jane"];
const string = JSON.stringify(arr);
document.getElementById("str").innerHTML = string;

const object1 = '{"name":"priya","age":"25","rank":"1"}';
const str = JSON.parse(object1);
 var x=str.name;
console.log(x);

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo1").innerHTML = myObj.name;
}
xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
xmlhttp.send();