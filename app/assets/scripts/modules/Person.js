

class Person{
  constructor(fullName, favColor){
    this.name = fullName;
    this.favColor = favColor;

    }
    greet(){
      console.log("Hi there there my name is " + this.name);
  }
}
module.exports = Person;
