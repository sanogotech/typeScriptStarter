 
class Person {
    first_name: string;
    last_name: string;
  
    constructor(fname: string, lname: string)
    {
        this.first_name = fname;
        this.last_name = lname;
    }
    getName(): string
    {
        var fullname: string = this.first_name + " " + this.last_name;
        return fullname;
    }
}
  
  
var person1: Person = new Person("Gombo","KOFFI");

var message: string = "Akwaba";
var firstName: string = person1.getName();
console.log(message + " from " + firstName);