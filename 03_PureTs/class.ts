//A class is basically a blueprint for creating objects.

class Car {
  brand = "Honda";   // property
  model = "City";
  name
  
  //Runs automatically when you create an object.
    constructor(name: string) {
    this.name = name;
}


  drive() {          // method
    console.log("Driving...");
  }
}

const c = new Car("Aaquib"); // object created
console.log(c.brand); // "Honda"
c.drive(); // "Driving..."


class User {
  private _name = "";// It doesn't accessed outside this class

  constructor(name: string) {
    this._name = name;
  }

  //getter
  get name() {
    return this._name.toUpperCase();
  }

  //setter only exception it doesn't return anything and that's why it doesn't have any return type
  set name(value: string) {
    this._name = value.trim();
  }
}

const u = new User(" aaquib ");
console.log(u.name); // AAQUIB
u.name = "   john   ";
console.log(u.name); // JOHN

