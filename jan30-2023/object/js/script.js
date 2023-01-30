let person = {
    firstName : "priya",
    lastName  : "s",
    age     : 50,
    eyeColor  : "grey"
  };
  
  document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;

  const person2 = new Object();
  person2.firstName = "selva";
  person2.age = 28;
  console.log(person2);
  const name1={
    firstName: "banu",
    gender: "female"
  }
 const x = name1;
 x.firstName="parveen";
 console.log(name1);

 const data = {
    fname:"sulfia",
    lname:"fathima",
    age:25
  }; 
  
  let txt = "";
  for (let x in data) {
    txt += data[x] + " ";
  }
  console.log(txt);

  const data1 = {
    firstName: "malar",
    lastName: "selvi",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(data1.fullName());
  console.log(data1.firstName);
  console.log(data1.lastName);

  const myarr = Object.values(data1);
  console.log(myarr);