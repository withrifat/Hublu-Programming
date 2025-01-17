





const first = {
    name: 'John',
    lstName: 'Doe',
    age: 20,
    email: 'john@email.com',
};
console.log(first);

const person = {
    name: "John",
    age: 30,        //property or parameter
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  console.log(person.name);  // Output: John
  person.greet();            // Output: Hello, John
  

  const rifat = {
    name: "Rifat",
    age: 20,
    education: "BSc in CSE",
    cgpa: 3.5,
  }
console.log(rifat.name, rifat.cgpa);  //best way to access object property
console.log(rifat["cgpa"]); //another way to access object property

rifat.name = "Rifat Hasan";   //modify this value
console.log(rifat.name);

// add new object property
rifat.email = "rifat@email.com";
rifat.job= "Web Developer";
rifat.age = 21;
rifat.homeTown = "Pabna";
rifat.Gf = "N/A";
rifat.work = "Freelancer";
rifat.interest = "Programming";
// delete object property
delete rifat.name;
// if else in object condition
console.log("age" in rifat);

if(rifat.age > 40){
    console.log("He is adult");
} else {
    console.log("He is not adult");
}
console.log(rifat);
