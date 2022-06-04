class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
   constructor(name, sex) {
    this.name = name;
    this.sex = sex;
   }

  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    }
    if (this.sex === "female") {
      return `${this.name} says squawk!`;
    }
  }
}

let jacques = new Cat("Jacques", "male");
let cheyenne = new Cat("Cheyenne", "female");
let falco = new Bird("Falco", "male");

console.log(`${jacques.speak()}`);
console.log(`${cheyenne.speak()}`);
console.log(`${falco.speak()}`);
