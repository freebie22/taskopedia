class Person {
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getInfo() {
    return("Name: " +  this.firstName + " LastName: " + this.lastName + " Age: " + this.age);
  }
}

class Employee extends Person{
  companyName;
  constructor(firstName, lastName, age, companyName) {
    super(firstName, lastName, age);
    this.companyName = companyName;
  }
  getInfo() {
    return(super.getInfo() + " Company Name: " + this.companyName);
  }
}
